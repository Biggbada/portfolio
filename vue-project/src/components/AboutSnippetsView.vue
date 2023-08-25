<template>
  <div id="bio-col-3" class="item-column bordered">
    <p class="code">// Code snippet showcase:</p>
    <div class="flex-row">
      <div class="item-column">
        <img src="../assets/user-image.svg" width="50" height="50" alt="" />
      </div>
      <div class="item-column">
        <p class="thin-para violet" id="about-username">@username</p>
        <p class="thin-para" id="about-created-at">Created 5 months ago</p>
      </div>
      <div class="flex-row">
        <img src="../assets/comments-icon.svg" width="20" height="20" alt="" />
        <span>details</span>
        <img src="../assets/star.svg" alt="" />
        <span>3 stars</span>
      </div>
    </div>
    <div class="flex-row about-code-block">
      <p class="code">
        <span class="salmon">function</span> initializeModelChunk<t
          >(chunk: ResolvedModelChunk): T { const value: <span class="orange">T</span>
          <span class="violet">=</span> <span class="pink">parseModel</span>(chunk.<span
            class="violet"
            >_response</span
          >, chunk.<span class="violet">_value</span>);
          <span class="salmon">const</span> initializedChunk:
          <span class="orange">InitializedChunk</span
          ><t>
            = (chunk: any); initializedChunk.<span class="violet"> _status = INITIALIZED</span>;
            initializedChunk.<span class="violet">_value</span> = value;<br />
            <span class="orange">return</span> value;<br />
            }
          </t></t
        >
      </p>
    </div>
    <div class="flex-row">
      <div class="item-column">
        <img src="../assets/user-image.svg" width="50" height="50" alt="" />
      </div>
      <div class="item-column">
        <p class="thin-para violet" id="about-username">@username</p>
        <p class="thin-para" id="about-created-at">Created 5 months ago</p>
      </div>
      <div class="flex-row">
        <img src="../assets/comments-icon.svg" width="20" height="20" alt="" />
        <span>details</span>
        <img src="../assets/star.svg" alt="" />
        <span>3 stars</span>
      </div>
    </div>
    <div class="flex-row about-code-block">
      <p class="code">
        <span class="salmon">export function</span> parseModelTuple( response:
        <span class="orange">Response</span>, value: {<span class="violet">+</span>[key: string]:
        JSONValue} | $ReadOnlyArray <span class="violet">&lt;</span
        ><span class="green">JSONValue</span><span class="violet">&gt;</span>, ): any { const tuple:
        [mixed, mixed, mixed, mixed] = (value: any);
      </p>
    </div>
  </div>
</template>
