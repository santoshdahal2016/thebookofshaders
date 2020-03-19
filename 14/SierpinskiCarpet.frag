#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;
vec4 result;

void main() {
    vec2 st = gl_FragCoord.xy/u_resolution.xy;
    for(int i = 0; i < 5; i++)
        st = 3.*fract(st),
      result +=  abs(st.x-1.5)<.5&&abs(st.y-1.5)<.5? 1. : 0.;
    gl_FragColor = result;
}
