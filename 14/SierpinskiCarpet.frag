#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

void main() {
    vec2 st = gl_FragCoord.xy/u_resolution.xy;

    // try playing with the scale
    float scale = 3.0;
    float half_scale = scale * 0.5;

    // try changing the depth
    const int depth = 5;

    float result;
    for(int i = 0; i < depth; i++)
    {
      st = scale*fract(st);
      vec2 a_st = abs(st-half_scale);
      result += step(a_st.x,.5)*step(a_st.y,.5);
    }

    gl_FragColor = vec4(vec3(result),1.0);
}