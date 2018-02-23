let portfolio = $("#portfolio");
let about = $("#about");
let contact = $("#contact");

let portfolioContent = $("#project-cards");
let aboutContent = $("#about-me");
let contactContent = $("#contact-me");


$("#portfolio").click(function ()
{
    if (!portfolio.hasClass("active"))
    {
        portfolio.addClass("active");

        portfolioContent.css("display", "flex");
        updateOtherElements(portfolio);
    }
});

$("#about").click(function ()
{
    if (!about.hasClass("active"))
    {
        about.addClass("active");

        aboutContent.css("display", "flex");
        updateOtherElements(about);
    }
});

$("#contact").click(function ()
{
    if (!contact.hasClass("active"))
    {
        contact.addClass("active");

        contactContent.css("display", "flex");
        updateOtherElements(contact);
    }
});

function updateOtherElements(thisElement)
{
    if (thisElement !== portfolio)
    {
        if (portfolio.hasClass("active"))
        {
            portfolio.removeClass("active");
        }

        portfolioContent.css("display", "none");
    }

    if (thisElement !== about)
    {
        if (about.hasClass("active"))
        {
            about.removeClass("active");
        }

        aboutContent.css("display", "none");
    }

    if (thisElement !== contact)
    {
        if (contact.hasClass("active"))
        {
            contact.removeClass("active");
        }

        contactContent.css("display", "none");
    }
}

$(window).resize(function ()
{

    if ($(this).width() < 635)
    {

        $('.navigation-bar').hide();

    } else
    {

        $('.navigation-bar').show();

    }
});