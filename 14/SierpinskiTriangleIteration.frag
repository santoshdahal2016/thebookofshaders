#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;


// sqrt(3)/2
// 1.732050807568877 / 2 = 0.8660254037844386
#define HEIGHT 0.866025
#define MAXSTEP 5.

vec4 result;

void main() {
    vec2 st = gl_FragCoord.xy/u_resolution.xy;
        vec2 st2 = st;
    st.y *= HEIGHT;

    
    for(float i = 1.0; i<=MAXSTEP; i++) {

        
        float level = exp2(-i);
        float pos   = mod(st.x, level); 
        
        float halfLevel = level/2.;
        
        if(mod(floor(st.x/halfLevel), 2.) == 1. )
           pos = level - pos;

        st.y = mod(st.y, HEIGHT*exp2(-i+1.));
        
        
        
        if( abs(.5-st2.x)*2. < 1.-st2.y )
          if ( st.y < level*HEIGHT )
            if ( sqrt(3.)*(pos) < st.y )
       gl_FragColor = vec4(1.);

    }
}
