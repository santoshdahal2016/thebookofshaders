#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

void main() {
    vec3 col = vec3(0.);

    vec2 st = (gl_FragCoord.xy-0.5*u_resolution.xy)/u_resolution.y;
	st *= 3.;
    
    float d = length(st- vec2(clamp(st.x,-1.,1.),0.));
	col += smoothstep(0.03,0.0,d);
    
    gl_FragColor = vec4(col,1.);
}
