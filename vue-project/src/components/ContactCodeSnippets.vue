<template>
  <div id="contact-form-displayer" class="item-column bordered">
    <p>
      <span class="pink">const</span>
      <span class="violet">button</span>
      <span class="pink">=</span>
      <span class="violet"> document.querySelector</span>(<span class="orange">'#sendBtn'</span
      >);<br />
      <span class="pink">const</span><span class="violet">message</span
      ><span class="pink"> =</span> { <span class="violet">name</span>:
      <span class="orange"> "Jonathan Davis"</span>,<span class="violet"> email</span>:
      <span class="orange"> ""</span>, <span class="violet">message</span>:
      <span class="orange"> ""</span>, date: <span class="orange"> "Thu 21 Apr"</span> }<br />
      <span class="violet">button.addEventListener</span>( <span class="orange">'click'</span>, ()
      <span class="pink">=&gt;</span> {<br />
      <span class="violet">form.send</span>(<span class="violet">message</span>);<br />
      }<br />)
    </p>
  </div>
</template>
