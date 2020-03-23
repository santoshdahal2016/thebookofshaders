#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

void main() {
    vec2 st = gl_FragCoord.xy/u_resolution.xy;
    st = st * 2.0 - 1.0;

    // position
    st += vec2(0.0,0.0);

    // zoom
    st *= 1.0;

    vec2 z;
    float result;
    for(float i = 0.0; i < 255.0; i++)
    {
        z = vec2(z.x*z.x-z.y*z.y,2.0*z.x*z.y)+st;
        if(length(z) >= 2.0)
            break;
        
        result = i;
    }
    result = result/255.0;

    gl_FragColor = vec4(result,result,result,1.0);
}
