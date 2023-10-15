// chess pattern challange the karel robot
// website-stanford.edu/~cpiech/karel/ide.html

function main(){   
    putBeeper();
    moveAndBepper();
    moveAndBepper();
    turnLeftmove();
    moveAndBepper();
    moveTurnright();
    moveAndBepper();
    moveAndBepper();
    turnLeftmove();
    moveAndBepper();
    moveTurnright();
    moveAndBepper();
    moveAndBepper();
    }
    function moveAndBepper(){
    move();
    move();
    putBeeper();
    }
    function turnLeftmove(){
       turnLeft();
       move();
       turnLeft();
       move();
       putBeeper();
    }
    
    function moveTurnright(){
       move();
       turnRight();
       move();
       putBeeper();
       turnRight();
    }


    