<template>
  <div class="item-column" id="welcome-right">
    <div id="metal-block">
      <div id="metal-block-top">
        <img id="bolt-up-left" src="../assets/bolt-up-left.svg" alt="" width="30" height="30" />
        <img id="bolt-up-right" src="../assets/bolt-up-right.svg" alt="" width="30" height="30" />
      </div>
      <div class="flex-row item" id="metal-block-content">
        <div id="metal-block-content-left">
          <img src="../assets/snake-food.svg" alt="" />
          <img src="../assets/snake.svg" alt="" />
          <button class="yellow-button">start-game</button>
        </div>
        <div id="metal-block-content-right">
          <div id="commands-container">
            <div class="flex-row">
              <p id="game-instructions">
                // use keyboard<br />
                // arrows to play
              </p>
            </div>
            <div class="flex-row">
              <img src="../assets/up-arrow.svg" alt="" />
            </div>
            <div class="flex-row">
              <img src="../assets/left-arrow.svg" alt="" />
              <img src="../assets/down-arrow.svg" alt="" />
              <img src="../assets/right-arrow.svg" alt="" />
            </div>
          </div>
          <div id="snake-food" class="flex-row">
            <p id="food-left">// food left</p>
            <p>
              <img src="../assets/snake-food.svg" alt="" />
              <img src="../assets/snake-food.svg" alt="" />
              <img src="../assets/snake-food.svg" alt="" />
              <img src="../assets/snake-food.svg" alt="" />
              <img src="../assets/snake-food.svg" alt="" />
              <img src="../assets/snake-food.svg" alt="" />
              <img src="../assets/snake-food.svg" alt="" />
              <img src="../assets/snake-food-off.svg" alt="" />
              <img src="../assets/snake-food-off.svg" alt="" />
              <img src="../assets/snake-food-off.svg" alt="" />
            </p>
          </div>
          <div id="skip-button-container">
            <button class="skip-button">skip</button>
          </div>
        </div>
      </div>

      <div id="metal-block-bottom">
        <img id="bolt-up-left" src="../assets/bolt-down-left.svg" alt="" width="30" height="30" />
        <img id="bolt-up-right" src="../assets/bolt-down-right.svg" alt="" width="30" height="30" />
      </div>
    </div>
  </div>
</template>
