var gallery;
var numOfSlides;
var currentPos;

function start()
{
    gallery = document.getElementById('j-gallery');
    numOfSlides = 0;
    currentPos = 0;

    getNumOfSlides();
    deactivateImages();

    document.getElementById('j-prev').addEventListener('click', function(){changePos("prev")});
    document.getElementById('j-next').addEventListener('click', function(){changePos("next")});
}

function getNumOfSlides()
{
    let classes = gallery.className.split(/\s+/);
    numOfSlides = parseInt(classes[0].replace(classes[0].slice(0, 10), ''));
}

function deactivateImages()
{
    document.getElementById(0).style.display = "inline";
    for (var i = 1; i < numOfSlides; i++)
        {
            document.getElementById(i).style.display = "none";
        }
}

function changePos(dir)
{
    if (dir === "next")
        {
            if (currentPos < numOfSlides - 1)
                {
                    currentPos++;
                }
            else
                {
                    currentPos = 0;
                }
        }
    else if (dir === "prev")
        {
            if (currentPos > 0)
                {
                    currentPos--;
                }
            else
                {
                    currentPos = numOfSlides - 1;
                }
        }

    showActiveImage();
}

function showActiveImage()
{
    document.getElementById(currentPos).style.display = "inline";

    for (var i = 0; i < numOfSlides; i++)
        {
            if (i === currentPos){}
            else
                {
                    document.getElementById(i).style.display = "none";
                }
            
        }
}

window.onload = function()
{
    start();
}