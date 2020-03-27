#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;
const float PI = 3.1415;
const int iteration = 3;
float thickness =5.;
float scale = 2.;

vec2 GetAngle(float angle) {
    return vec2(sin(angle), cos(angle));
}

void main() {
    vec2 st = (gl_FragCoord.xy-0.5*u_resolution.xy)/u_resolution.y;

     vec2 mouse = u_mouse/u_resolution;
     float d;
     vec3 col = vec3(0.);
     float angle = (5./6.)*PI;
     // Tweaking fractal by mouse
     //angle = mouse.x * PI;
     vec2 n = GetAngle(angle);
    
     st *= scale;
     // Symmetry along x coordinate
     st.x = abs(st.x);  
     d = dot(st-vec2(.05,0.), n);
     // Masking triangle  
     st -= max(0.,d)*n*2.; 
     st.x += 0.5;    
    
      //calculating tan to find out how much offset to be in the center
      st.y += tan((5./6.)*PI)*.5;
      n = GetAngle((2./3.)*PI);
    
      //Demonstrating reflection
      //col += smoothstep(0.01,0.0,abs(d));
    
    
      for(int i=0; i<iteration; i++) { 
        // Multiplying scale on each iteration  
        thickness *= 2.; 
        
        //Remapping UV  
        st *= 3.;
        st.x -= 1.5;
          
        // Symmetry along x coordinate
        st.x = abs(st.x);  
        st.x -= .5;
        
        
        // calculating dot product
        // dot(st,n) = st.x*n + st.y*n
        // example:
        // angle = 90
        // vec2 n = vec2(sin(90),cos(90)); => n = vec2(0,1);
        // dot(st,n) = (st.x*0 + st.y*1) = st.y
        d = dot(st, n);
        // Masking triangle  
        st -= min(0.,d)*n*2.;
      }
     
    
     // Drawing a line
     d = length(st- vec2(clamp(st.x,-1.,1.),0.));
     col += smoothstep(0.01,0.0,d/thickness);
    
     // Demonstrating UV
     //col.rg += st;
    gl_FragColor = vec4(col,1.);
}