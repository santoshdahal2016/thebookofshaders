
#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

// Created by evilryu
// License Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License.

#define sqrt3 1.732050808

// Equilateral triangle is defined by
// max(-2y, y-x*sqrt3, y+x*sqrt3) = R
// R is the circumradius
float tri(vec2 p, float r)
{
    float d=abs(max(-2.*p.y, max(p.y-sqrt3*p.x, p.y+sqrt3*p.x))-r);
    return smoothstep(0.0,0.015,d);
}

vec2 symm(float a, float b, float c, vec2 p)
{
    float x = ((b*b-a*a)*p.x-2.0*a*b*p.y-2.0*a*c) / (a*a+b*b);
    float y = ((a*a-b*b)*p.y-2.0*a*b*p.x-2.0*b*c) / (a*a+b*b);
    return vec2(x,y);
}

void main() {
	vec2 p = (2.0*gl_FragCoord.xy - u_resolution.xy)/u_resolution.y;
 	p.y+=0.2;
    
    float s=1.0;
    vec3 result=vec3(tri(p,s));
	p.y=-p.y;    
    float iter = mod(floor(u_time),7.0);
    for(int i = 0; i < 7; ++i)
    {
        if(i < int(iter+0.5))
        {
            s*=0.5;
            result*=tri(p,s);

            if(p.y+sqrt3*p.x>s)// Bottom right triangle
                p=symm(sqrt3/3., 1.0, 0., p);// Folding along y+1/3*x

            if(p.y-sqrt3*p.x>s)// Bottom left triangle
                p=symm(-sqrt3/3., 1.0, 0., p);// Folding along y-1/3*x

            p.y+=s;
        }
        else
        {
            // The animation
            float a=-2.0*fract(u_time);
            result*=tri(vec2(p.x*cos(a)-p.y*sin(a), p.y*cos(a)+p.x*sin(a)),
                     fract(u_time)*s*0.5);
        }
    }
    gl_FragColor=vec4(result,1.); 
}
