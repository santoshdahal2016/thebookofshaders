#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

void main() {
    vec2 fragCoord = gl_FragCoord.xy/u_resolution.xy;

    // try commenting out the line below
    fragCoord.x-=.5*fragCoord.y; 

    float result;
    for(int i = 0; i < 8; i++)
    {
        fragCoord = 2.*fract(fragCoord);
        result += step(1.0,fragCoord.x)*step(1.0,fragCoord.y);
    }

    gl_FragColor = vec4(vec3(result),1.0);
}
