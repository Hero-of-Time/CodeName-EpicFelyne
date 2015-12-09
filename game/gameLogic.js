A3D.config = {
  game:{
    forceResolution: true,
    targetRes : [640,480],
    startScene : 'first_level'
  },
  scenes : {
    first_level : {
      rootUrl : './scenes/',
      file : 'platformer.babylon'
    }
  },

      lives: 2,
      speed : 1,
      jumpButton : 32,
      leftButton : 65,
      rightButton : 68,
      gravity : -0.6,

      actionButton: 'leftmouse',
      playerSettings : {
        meshName: 'Sphere',
        rootUrl: '/models/',
        file:'Felyne-completed.babylon',
        spawnPoint : 'InitialSpawn',
        jumpForce : 1.5,
        jumpAccel : 1,
        animationsSetup : [
          {
            name : 'walk',
            start : 20,
            end : 59,
            options : {
              ratio: 2.4
            }
          },
          {
            name : 'idle',
            start:80,
            end : 83,
            options : {
              loop : true,
              ratio : .2
            }
          },
          {
            name : 'hit',
            start:110,
            end : 120,
            options : {
              loop : true,
              ratio : .2
            }
          },
          {
            name : 'jump',
            start : 80,
            end : 100,
            options : {
              ratio : 2,
              loop : false
            }
          }
        ],
        rotationValues : {
          left : 1.5,
          right : -1.5
        },

        scale : {
          x: 1,
          y: 1,
          z : 1
        },
        boundsOffset : {
          z : 0,
          x : 0,
          y: 7.3
        }

      },
      endTrigger : 'Flag',
      screenImages : [
        {
          src:'/images/start.png',
          id : 'mainScreen'
        },
        {
          src:'/images/lose.png',
          id : 'loseScreen'
        },
        {
          src:'/images/win.png',
          id : 'winScreen'
        }
      ],
      livesImage : {
        src : '/images/heart.png',
        dX:0,
        dY:10,
        dWidth:30,
        dHeight:30
      },
      cameraSettings : {
        offset : {
          x : 30,
          y : 20,
          z : -40
        },
        rotation : {
          x: .3,
          y: -.3,
          z: 0
        }
      }

};

function start(){
  new A3D.Game();
}

document.addEventListener( "DOMContentLoaded", start, false );
