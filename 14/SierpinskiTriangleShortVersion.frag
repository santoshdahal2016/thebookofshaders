#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

void main() {
    vec2 st = gl_FragCoord.xy/u_resolution.xy;

    // try commenting out the line below
    st.x-=.5*st.y; 

    float result;
    for(int i = 0; i < 8; i++)
    {
        st = 2.*fract(st);
        result += step(1.0,st.x)*step(1.0,st.y);
    }

    gl_FragColor = vec4(vec3(result),1.0);
}
