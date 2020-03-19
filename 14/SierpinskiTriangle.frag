
#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

void main() {
    vec2 fragCoord = gl_FragCoord.xy/u_resolution.xy;
    fragCoord.x *= u_resolution.x/u_resolution.y;
    vec4 result;

    fragCoord.x-=.5*fragCoord.y; 
    for(int i = 0; i < 9; i++)
        fragCoord = 2.*fract(fragCoord),
        fragCoord.x>=1.&&fragCoord.y>=1. ? result++ : result;

    gl_FragColor = result;
}
