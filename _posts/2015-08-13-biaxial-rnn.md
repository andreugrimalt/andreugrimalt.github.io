---
title:  "Music generation with a biaxial recurrent neural network"
published: true
permalink: /biaxial-rnn/
summary: "Bach and Schubert through a biaxial recurrent neural network (RNN)"
tags: [research, neural networks]
codeLink: "https://github.com/andreugrimalt/biaxial-rnn"
imageSource: "https://upload.wikimedia.org/wikipedia/commons/8/8f/Elman_srnn.png"
audioSources: ["https://cdn.rawgit.com/andreugrimalt/biaxial-rnn/master/1_epoch.mp3","https://cdn.rawgit.com/andreugrimalt/biaxial-rnn/master/bach_1.mp3","https://cdn.rawgit.com/andreugrimalt/biaxial-rnn/master/bach_2.mp3","https://cdn.rawgit.com/andreugrimalt/biaxial-rnn/master/Schubert_0.mp3"]
layout: "post"
---
I borrowed heavily from:
<a href="https://github.com/hexahedria/biaxial-rnn-music-composition" target="_blank">https://github.com/hexahedria/biaxial-rnn-music-composition</a>
<p>More info comming soon</p>
<div class="row">
  <div class="col-xs-6">
    <h4>Output after one epoch</h4>
    <audio controls>
      <source src="{{page.audioSources[0]}}" type="audio/mpeg">
    </audio>
  </div>
  <div class="col-xs-6">
    <h4>Output after Bach training (1)</h4>
    <audio controls>
      <source src="{{page.audioSources[1]}}" type="audio/mpeg">
    </audio>
  </div>
</div>
<div class="row">
  <div class="col-xs-6">
    <h4>Output after Bach training (2)</h4>
    <audio controls>
      <source src="{{page.audioSources[2]}}" type="audio/mpeg">
    </audio>
  </div>
  <div class="col-xs-6">
    <h4>Output after Schubert training</h4>
    <audio controls>
      <source src="{{page.audioSources[3]}}" type="audio/mpeg">
    </audio>
  </div>
</div>
