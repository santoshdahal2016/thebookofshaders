#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

void main() {
    vec2 st = (gl_FragCoord.xy-0.5*u_resolution.xy)/u_resolution.y;
	st *= 3.;
    
    vec3 col = vec3(0.);
    float angle = u_mouse.x*3.1415/u_resolution.y;
    vec2 n = vec2(sin(angle),cos(angle));
 
    st.x = abs(st.x);
    st.x -= 0.5;
    st -= n*min(0.,dot(st,n))*2.;
    
    float d = length(st- vec2(clamp(st.x,-1.,1.),0.));
	col += smoothstep(0.03,0.0,d);
    col.rg += st;
 
    
    
    gl_FragColor = vec4(col,1.);
}
