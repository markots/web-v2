var pageNum = 0;
objNames = ["line1_", "line2_", "line3_", "mark1_", "mark2_", "image1_", "image2_", "image3_"];
function wheel(event) {
    event.preventDefault();
    isNext = event.wheelDeltaY < 0;
    if (isNext) {
        if (pageNum < 3)
            pageNum++;
    }
    else {
        if (pageNum > 0)
            pageNum--;
    }


    if (pageNum == 1) {
        if (isNext) {
            for (var i = 0; i < objNames.length - 3; i++)
                if (document.getElementsByClassName(objNames[i] + pageNum).length > 0)
                    document.getElementsByClassName(objNames[i] + pageNum)[0].className = objNames[i] + "move1";
            if (document.getElementsByClassName("image1_1").length > 0)
                document.getElementsByClassName("image1_1")[0].className = "image1_move1";
            if (document.getElementsByClassName("image2_1").length > 0)
                document.getElementsByClassName("image2_1")[0].className = "image2_1";
            if (document.getElementsByClassName("image3_1").length > 0)
                document.getElementsByClassName("image3_1")[0].className = "image3_1";
        }
        else {
            for (var i = 0; i < objNames.length - 3; i++)
                if (document.getElementsByClassName(objNames[i] + "move2").length > 0)
                    document.getElementsByClassName(objNames[i] + "move2")[0].className = objNames[i] + "move1";
            if (document.getElementsByClassName("image1_move2").length > 0)
                document.getElementsByClassName("image1_move2")[0].className = "image1_1";
            if (document.getElementsByClassName("image2_move2").length > 0)
                document.getElementsByClassName("image2_move2")[0].className = "image2_1";
            if (document.getElementsByClassName("image3_1").length > 0)
                document.getElementsByClassName("image3_1")[0].className = "image3_1";
        }
    }
    else if (pageNum == 2) {
        if (isNext) {
            for (var i = 0; i < objNames.length - 3; i++)
                if (document.getElementsByClassName(objNames[i] + "move1").length > 0)
                    document.getElementsByClassName(objNames[i] + "move1")[0].className = objNames[i] + "move2";
            if (document.getElementsByClassName("image1_move1").length > 0)
                document.getElementsByClassName("image1_move1")[0].className = "image1_move2";
            if (document.getElementsByClassName("image2_1").length > 0)
                document.getElementsByClassName("image2_1")[0].className = "image2_move2";
            if (document.getElementsByClassName("image3_1").length > 0)
                document.getElementsByClassName("image3_1")[0].className = "image3_1";
        }
        else {
            for (var i = 0; i < objNames.length - 3; i++)
                if (document.getElementsByClassName(objNames[i] + "move3").length > 0)
                    document.getElementsByClassName(objNames[i] + "move3")[0].className = objNames[i] + "move2";
            if (document.getElementsByClassName("image1_move1").length > 0)
                document.getElementsByClassName("image1_move1")[0].className = "image1_1";
            if (document.getElementsByClassName("image2_2").length > 0)
                document.getElementsByClassName("image2_2")[0].className = "image2_1";
            if (document.getElementsByClassName("image3_move3").length > 0)
                document.getElementsByClassName("image3_move3")[0].className = "image3_1";
        }
    }
    else if (pageNum == 3) {
        if (isNext) {
            for (var i = 0; i < objNames.length - 3; i++)
                if (document.getElementsByClassName(objNames[i] + "move2").length > 0)
                    document.getElementsByClassName(objNames[i] + "move2")[0].className = objNames[i] + "move3";
            if (document.getElementsByClassName("image1_move2").length > 0)
                document.getElementsByClassName("image1_move2")[0].className = "image1_1";
            if (document.getElementsByClassName("image2_move2").length > 0)
                document.getElementsByClassName("image2_move2")[0].className = "image2_1";
            if (document.getElementsByClassName("image3_1").length > 0)
                document.getElementsByClassName("image3_1")[0].className = "image3_move3";
        }
    }
}
