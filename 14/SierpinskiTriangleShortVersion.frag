#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;
vec4 result;

void main() {
    vec2 fragCoord = gl_FragCoord.xy/u_resolution.xy;
    fragCoord.x-=.5*fragCoord.y; 
    for(int i = 0; i < 9; i++)
        fragCoord = 2.*fract(fragCoord),
        result += fragCoord.x>=1.&&fragCoord.y>=1. ? 1. : 0.;
    gl_FragColor = result;
}
