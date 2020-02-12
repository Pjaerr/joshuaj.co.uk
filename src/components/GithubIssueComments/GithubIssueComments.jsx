import React, { useEffect, useState } from "react";

import "./GithubIssueComments.css";

/**
 * Utilise an existing Github Issue as a comment thread
 *
 * Props:
 * ---
 * @param {string} issueUri The URI of the github issue you want to load comments from.
 * Using the following structure: `USER/REPOSITORY_NAME/issues/ISSUE_NUMBER`.
 *
 * @param {boolean} [useShowCommentsButton] Should the comments (and their network request) be hidden behind a
 * "Show Comments" button. True if no value is provided.
 *
 * @param {number} [commentsPerPage] How many comments should be shown per page, will show pagination if there
 * is more than 1 page and will show all comments on a single page if no value is provided.
 *
 * @param {boolean} [allowRefreshingComments] Should the user be shown a "Check for new comments" button? True if
 * no value is provided.
 */
const GithubIssueComments = ({
  issueUri,
  useShowCommentsButton = true,
  allowRefreshingComments = true,
  commentsPerPage
}) => {
  const [showComments, setShowComments] = useState(!useShowCommentsButton);

  return (
    <section className="GithubIssueComments-container">
      {showComments ? (
        <GithubIssueCommentsCore
          issueUri={issueUri}
          commentsPerPage={commentsPerPage}
          allowRefreshingComments={allowRefreshingComments}
        />
      ) : (
        <button
          className="GithubIssueComments-show-comments-button"
          onClick={() => setShowComments(true)}
        >
          Show Comments
        </button>
      )}
    </section>
  );
};

const GithubIssueCommentsCore = ({
  issueUri,
  commentsPerPage,
  allowRefreshingComments
}) => {
  const [comments, setComments] = useState([]);
  const [commentsHaveLoaded, setCommentsHaveLoaded] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);

  const loadComments = () => {
    /*Make a GET request to the github API for comments at the provided IssueUri. Request that
    the comment body be formatted as HTML.*/
    if (window.fetch !== undefined) {
      fetch(`https://api.github.com/repos/${issueUri}/comments`, {
        method: "GET",
        headers: {
          Accept: "application/vnd.github.v3.html+json"
        }
      })
        .then(res => {
          return res.json();
        })
        .then(data => {
          //If the provided Github Issue exists
          if (!data.message) {
            data = data.reverse();

            //If no comment per page limit has been set, show all comments on one page
            if (!commentsPerPage) {
              commentsPerPage = data.length;
            }

            //Organise comments into pages
            const commentPages = []; //The array of all page arrays
            let page = []; //The current page

            let currentComment = 0;

            /*For each comment, push it to an array, and if the array reaches the size of
          commentsPerPage push the array into the commentPages array and start a new array 
          until all comments have been allocated to page arrays.*/
            for (const comment of data) {
              page.push({
                body: { __html: comment["body_html"] },
                user: {
                  username: comment.user.login,
                  avatarUrl: comment.user["avatar_url"],
                  isRepositoryOwner: comment["author_association"] === "OWNER"
                },
                createdAt: comment["created_at"]
              });

              //If we've reached the maximum number of comments in a page
              if (currentComment === commentsPerPage - 1) {
                commentPages.push(page);
                page = [];
                currentComment = 0;
              } else {
                currentComment++;
              }
            }

            //If we've run out of comments but not met our commentsPerPage limit,
            //Push the last page to the array of pages
            if (page.length > 0) {
              commentPages.push(page);
            }

            setComments(commentPages);
            setCommentsHaveLoaded(true);
          } else {
            console.error(`The issueUri: "${issueUri}" doesn't exist`);
          }
        });
    }
  };

  useEffect(loadComments, [issueUri]);

  if (commentsHaveLoaded) {
    return (
      <>
        {comments.length > 0 && comments[currentPage] ? (
          comments[currentPage].map(comment => (
            <Comment
              key={comment.user.username + "_" + comment.createdAt}
              body={comment.body}
              user={comment.user}
              createdAt={comment.createdAt}
            />
          ))
        ) : (
          <NoCommentsFound />
        )}
        {comments.length > 1 && (
          <Pagination
            activePage={currentPage}
            numberOfPages={comments.length}
            onPageChange={pageNumber => setCurrentPage(pageNumber)}
          />
        )}

        {allowRefreshingComments && (
          <RefreshCommentsButton onRefresh={loadComments} />
        )}

        <NewCommentButton
          redirectUrl={`https://github.com/${issueUri}#issue-comment-box`}
        />
      </>
    );
  }

  return <LoadingComments />;
};

/**
 *
 * @param {number} activePage Which button should be shown as active (0 based index).
 *
 * @param {number} numberOfPages How many buttons should be shown.
 *
 * @param {(pageNumber: number) => void} onPageChange Called when a button is pressed, passes argument
 * set to the index of the button pressed.
 */
const Pagination = ({ activePage, numberOfPages, onPageChange }) => {
  const buttons = [];

  for (let i = 0; i < numberOfPages; i++) {
    buttons.push(
      <button
        key={i}
        className={
          activePage === i
            ? "GithubIssueComments-pagination-button GithubIssueComments-pagination-button-active"
            : "GithubIssueComments-pagination-button"
        }
        onClick={() => {
          onPageChange(i);
        }}
      >
        {i + 1}
      </button>
    );
  }

  return <div className="GithubIssueComments-pagination">{buttons}</div>;
};

/**
 * Button component that calls a given `onRefresh()` function and disables itself for 1 second between
 * button clicks to avoid spamming the button.
 * @param {() => void} onRefresh
 */
const RefreshCommentsButton = ({ onRefresh }) => {
  const [allowCommentsRefresh, setAllowCommentsRefresh] = useState(false);

  return (
    <button
      className="GithubIssueComments-refresh-comments-button"
      disabled={allowCommentsRefresh}
      onClick={() => {
        setAllowCommentsRefresh(true);
        onRefresh();
        setTimeout(() => setAllowCommentsRefresh(false), 1000);
      }}
    >
      Check for new comments
    </button>
  );
};

const Comment = ({ body, user, createdAt }) => (
  <div className="GithubIssueComments-comment">
    <a
      className="GithubIssueComments-comment-user-avatar"
      href={`https://github.com/${user.username}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src={user.avatarUrl} alt={`Avatar of ${user.username}`} />
    </a>

    <div className="GithubIssueComments-comment-box">
      <div
        className={
          user.isRepositoryOwner
            ? "GithubIssueComments-comment-box-header GithubIssueComments-comment-box-header-isOwner"
            : "GithubIssueComments-comment-box-header"
        }
      >
        <b className="GithubIssueComments-comment-box-header-username">
          {user.username}
          <span> commented on {new Date(createdAt).toLocaleDateString()}</span>
        </b>
      </div>
      <div className="GithubIssueComments-comment-box-body">
        <p dangerouslySetInnerHTML={body}></p>
      </div>
    </div>
  </div>
);

const NoCommentsFound = () => (
  <p className="GithubIssueComments-no-comments-found">
    No comments found{" "}
    <span role="img" aria-label="Smiley Face Emoji">
      🙁
    </span>
  </p>
);

const NewCommentButton = ({ redirectUrl }) => (
  <a
    className="GithubIssueComments-new-comment-button"
    href={redirectUrl}
    target="_blank"
    rel="noopener noreferrer"
  >
    Write a Comment via Github
  </a>
);

const LoadingComments = () => (
  <section className="GithubIssueComments-container">
    <div className="GithubIssueComments-loading-icon"></div>
  </section>
);

export default GithubIssueComments;
