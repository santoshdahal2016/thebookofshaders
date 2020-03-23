#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

void main() {
    vec2 st = gl_FragCoord.xy/u_resolution.xy;

    // st = st * 2.0 - 1.0;
    // st *= 1.0;
    // st = fract(st);

    // st = abs(st-1.5);
    
    float scale = 3.0;
    float half_scale = scale * 0.5;

    float r;
    for(int i = 0; i < 7; i++)
    {
    //   st = fract(scale*st);
    //   vec2 a_st = abs(st-0.5);
    //   float d = length(a_st)+0.2;
    //   r *= step(d,0.5);
    //   result +=  a_st.x<.5 && a_st.y<.5 ? 1. : 0.;
    }

    gl_FragColor = vec4(r,r,r,1.0);
}