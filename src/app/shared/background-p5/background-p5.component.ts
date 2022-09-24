import { Component, ElementRef, OnInit } from '@angular/core';
import * as p5 from 'p5';

@Component({
  selector: 'app-background-p5',
  templateUrl: './background-p5.component.html',
  styleUrls: ['./background-p5.component.scss'],
})
export class BackgroundP5Component implements OnInit {

  vert = `
  attribute vec3 aPosition;
  uniform mat4 uModelViewMatrix;
  uniform mat4 uProjectionMatrix;

  void main() {
    vec4 pos = vec4(aPosition, 1.0);
    gl_Position = uProjectionMatrix * uModelViewMatrix * pos;
  }`;

  frag = `
  precision highp float;
  precision highp int;

  uniform float time;
  uniform vec2 resolution;

  uniform float speedX;
  uniform float speedY;
  uniform vec3 color;

  uniform float blobDensity;
  uniform float spaceBetweenBlob;

  uniform float oscillationX;
  uniform float oscillationY;


  vec2 random(vec2 uv) {
    uv = vec2( dot(uv, vec2(127.1,311.7) ),
               dot(uv, vec2(269.5,183.3) ) );
    return -1.0 + 2.0 * fract(sin(uv) * 43758.5453123);
  }

  float noise(vec2 uv, float seed_h, float seed_v) {
    uv.x = uv.x + seed_h;
    uv.y = uv.y + seed_v;

    vec2 uv_index = floor(uv);
    vec2 uv_fract = fract(uv);

    vec2 blur = smoothstep(0.0, 1.0, uv_fract);

    return mix( mix( dot( random(uv_index + vec2(0.0,0.0) ), uv_fract - vec2(0.0,0.0) ),
                     dot( random(uv_index + vec2(1.0,0.0) ), uv_fract - vec2(1.0,0.0) ), blur.x),
                mix( dot( random(uv_index + vec2(0.0,1.0) ), uv_fract - vec2(0.0,1.0) ),
                     dot( random(uv_index + vec2(1.0,1.0) ), uv_fract - vec2(1.0,1.0) ), blur.x), blur.y) + 0.5;
  }


  float fbm(vec2 uv, float seed_h, float seed_v, float amplitude, float frequency) {
    float value = 0.0;
    for (int i = 0; i < 5; i++) { // octaves = 5
        value += amplitude * noise(frequency * uv, noise(uv.xy, seed_h, seed_h) - 0.5, noise(uv.yx, seed_v, seed_v));
        amplitude *= 0.5;
        frequency *= 2.0;
    }
    return value;
  }

  void main() {
    float horizontal_seed = time * oscillationX;
    float vertical_seed = time * oscillationY;

    // Normalized pixel coordinates (from 0 to 1)
    vec2 uv = gl_FragCoord.xy / resolution;

    // noise
    uv.x = uv.x - time * speedX;
    uv.y = uv.y + time * speedY;
    float noise = fbm(uv, horizontal_seed, vertical_seed, spaceBetweenBlob, blobDensity);
    vec3 col = color * vec3(noise);

    // Output to screen
    gl_FragColor = vec4(col, 1.0);
  }`;
  p5obj: any;

  constructor(private el: ElementRef) { }

  ngOnInit() {
    this.p5obj = new p5(p => {
      p.setup = () => { this.setup(p); };
      p.draw = () => { this.draw(p); };
    }, this.el.nativeElement);
  }

  setup(p: any) {
    const truc = p.createCanvas(innerWidth, innerHeight, p.WEBGL);
    p.rectMode(p.CENTER);
    p.noiseShader = p.createShader(this.vert, this.frag);
    p.noStroke();
    p.background(0);
    truc.canvas.style.position = 'absolute';
    truc.canvas.style.zIndex = '0';
    const c = document.querySelector('app-background-p5');
    (c as HTMLElement).style.zIndex = '-125';
    (c as HTMLElement).style.position = 'absolute';
  }

  draw(p: any) {
    p.shader(p.noiseShader);
    p.noiseShader.setUniform('time', p.millis() / 1000);
    p.noiseShader.setUniform('resolution', [p.width, p.height]);
    p.noiseShader.setUniform('speedX', 0.05);
    p.noiseShader.setUniform('speedY', 0.025);
    p.noiseShader.setUniform('color', [164/255, 171/255, 191/255]);
    p.noiseShader.setUniform('blobDensity', p.width/300);
    p.noiseShader.setUniform('spaceBetweenBlob', 0.7);
    p.noiseShader.setUniform('oscillationX', 0.3);
    p.noiseShader.setUniform('oscillationY', 0.125);
    p.rect(0, 0, p.width, p.height);
    p.resetShader();
  }

}
