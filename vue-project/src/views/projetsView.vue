<template>
  <LeftAsideView>
    <div id="bio-folders" class="bio-items">
      <ul>
        <div class="flex-row-start gap-1">
          <li class="noli">
            <label for="techno">
              <input type="checkbox" name="techno" id="" />
              <span class="checkmark">x </span>
            </label>
            <img
              class="centered-img"
              src="./assets/logo-html.svg"
              width="24"
              height="24"
              alt=""
            />html
          </li>
        </div>
        <div class="flex-row-start gap-1">
          <li class="noli">
            <label for="techno">
              <input type="checkbox" name="techno" id="" />
              <span class="checkmark">x </span>
            </label>
            <img
              class="centered-img"
              src="./assets/logo-css.svg"
              width="24"
              height="24"
              alt=""
            />css
          </li>
        </div>
        <div class="flex-row-start gap-1">
          <li class="noli">
            <label for="techno">
              <input type="checkbox" name="techno" id="" />
              <span class="checkmark">x </span>
            </label>
            <img
              class="centered-img"
              src="./assets/logo-react.svg"
              width="24"
              height="24"
              alt=""
            />react
          </li>
        </div>
        <div class="flex-row-start gap-1">
          <li class="noli">
            <label for="techno">
              <input type="checkbox" name="techno" id="" />
              <span class="checkmark">x </span>
            </label>
            <img
              class="centered-img"
              src="./assets/logo-vue.svg"
              width="24"
              height="24"
              alt=""
            />Vue
          </li>
        </div>
      </ul>
    </div>
  </LeftAsideView>
  <ContentView>
    <main id="about-main">
      <div id="about-top-bar" class="flex-row-start">
        <div id="bio-personal-info" class="flex-row-start">
          <img class="centered-img" src="./assets/vector.svg" alt="" />projects
        </div>
        <div id="about-nav" class="flex-row-start">
          React; Vue<span id="personal-info-close">x</span>
        </div>
        <div id="over-snippet-bar" class="flex-row-start"></div>
      </div>

      <div id="about-content" class="flex-row-start">
        <div id="bio-col-1" class="item-column"></div>
        <div class="item-column bordered">
          <div id="projects-container" class="flex-row">
            <div class="project-thumb item-column">
              <div class="project-title code">
                <span class="violet">Project 1</span> // _ui-animations
              </div>
              <div class="project-container">
                <div id="project-1-pic" class="project-pic"></div>
                <div class="project-excerpt code">
                  Duis aute irure dolor in velit esse cillum dolore.
                </div>
                <div>
                  <button class="grey-button">view-project</button>
                </div>
              </div>
            </div>
            <div class="project-thumb item-column">
              <div class="project-title code">
                <span class="violet">Project 2</span> // _tetris-game
              </div>
              <div class="project-container">
                <div id="project-2-pic" class="project-pic"></div>
                <div class="project-excerpt code">
                  Duis aute irure dolor in velit esse cillum dolore.
                </div>
                <div>
                  <button class="grey-button">view-project</button>
                </div>
              </div>
            </div>
            <div class="project-thumb item-column">
              <div class="project-title code">
                <span class="violet">Project 3</span> // _ethereum
              </div>
              <div class="project-container">
                <div id="project-3-pic" class="project-pic"></div>
                <div class="project-excerpt code">
                  Duis aute irure dolor in velit esse cillum dolore.
                </div>
                <div>
                  <button class="grey-button">view-project</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </ContentView>
</template>
