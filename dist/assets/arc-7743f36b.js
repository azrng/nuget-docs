import{w as ln,c as j}from"./path-53f90ab3.js";import{ap as an,aq as G,ar as q,as as rn,at as y,U as tn,au as K,av as _,aw as un,ax as o,ay as sn,az as on,aA as fn}from"./mermaid.core-71e51f6d.js";function cn(l){return l.innerRadius}function yn(l){return l.outerRadius}function gn(l){return l.startAngle}function mn(l){return l.endAngle}function pn(l){return l&&l.padAngle}function xn(l,h,E,z,v,A,B,a){var I=E-l,i=z-h,n=B-v,m=a-A,r=m*I-n*i;if(!(r*r<y))return r=(n*(h-A)-m*(l-v))/r,[l+r*I,h+r*i]}function W(l,h,E,z,v,A,B){var a=l-E,I=h-z,i=(B?A:-A)/K(a*a+I*I),n=i*I,m=-i*a,r=l+n,s=h+m,f=E+n,c=z+m,C=(r+f)/2,t=(s+c)/2,p=f-r,g=c-s,R=p*p+g*g,T=v-A,w=r*c-f*s,O=(g<0?-1:1)*K(fn(0,T*T*R-w*w)),S=(w*g-p*O)/R,U=(-w*p-g*O)/R,P=(w*g+p*O)/R,x=(-w*p+g*O)/R,d=S-C,e=U-t,u=P-C,F=x-t;return d*d+e*e>u*u+F*F&&(S=P,U=x),{cx:S,cy:U,x01:-n,y01:-m,x11:S*(v/T-1),y11:U*(v/T-1)}}function vn(){var l=cn,h=yn,E=j(0),z=null,v=gn,A=mn,B=pn,a=null,I=ln(i);function i(){var n,m,r=+l.apply(this,arguments),s=+h.apply(this,arguments),f=v.apply(this,arguments)-rn,c=A.apply(this,arguments)-rn,C=un(c-f),t=c>f;if(a||(a=n=I()),s<r&&(m=s,s=r,r=m),!(s>y))a.moveTo(0,0);else if(C>tn-y)a.moveTo(s*G(f),s*q(f)),a.arc(0,0,s,f,c,!t),r>y&&(a.moveTo(r*G(c),r*q(c)),a.arc(0,0,r,c,f,t));else{var p=f,g=c,R=f,T=c,w=C,O=C,S=B.apply(this,arguments)/2,U=S>y&&(z?+z.apply(this,arguments):K(r*r+s*s)),P=_(un(s-r)/2,+E.apply(this,arguments)),x=P,d=P,e,u;if(U>y){var F=sn(U/r*q(S)),L=sn(U/s*q(S));(w-=F*2)>y?(F*=t?1:-1,R+=F,T-=F):(w=0,R=T=(f+c)/2),(O-=L*2)>y?(L*=t?1:-1,p+=L,g-=L):(O=0,p=g=(f+c)/2)}var H=s*G(p),J=s*q(p),M=r*G(T),N=r*q(T);if(P>y){var Q=s*G(g),V=s*q(g),X=r*G(R),Y=r*q(R),D;if(C<an)if(D=xn(H,J,X,Y,Q,V,M,N)){var Z=H-D[0],$=J-D[1],k=Q-D[0],b=V-D[1],nn=1/q(on((Z*k+$*b)/(K(Z*Z+$*$)*K(k*k+b*b)))/2),en=K(D[0]*D[0]+D[1]*D[1]);x=_(P,(r-en)/(nn-1)),d=_(P,(s-en)/(nn+1))}else x=d=0}O>y?d>y?(e=W(X,Y,H,J,s,d,t),u=W(Q,V,M,N,s,d,t),a.moveTo(e.cx+e.x01,e.cy+e.y01),d<P?a.arc(e.cx,e.cy,d,o(e.y01,e.x01),o(u.y01,u.x01),!t):(a.arc(e.cx,e.cy,d,o(e.y01,e.x01),o(e.y11,e.x11),!t),a.arc(0,0,s,o(e.cy+e.y11,e.cx+e.x11),o(u.cy+u.y11,u.cx+u.x11),!t),a.arc(u.cx,u.cy,d,o(u.y11,u.x11),o(u.y01,u.x01),!t))):(a.moveTo(H,J),a.arc(0,0,s,p,g,!t)):a.moveTo(H,J),!(r>y)||!(w>y)?a.lineTo(M,N):x>y?(e=W(M,N,Q,V,r,-x,t),u=W(H,J,X,Y,r,-x,t),a.lineTo(e.cx+e.x01,e.cy+e.y01),x<P?a.arc(e.cx,e.cy,x,o(e.y01,e.x01),o(u.y01,u.x01),!t):(a.arc(e.cx,e.cy,x,o(e.y01,e.x01),o(e.y11,e.x11),!t),a.arc(0,0,r,o(e.cy+e.y11,e.cx+e.x11),o(u.cy+u.y11,u.cx+u.x11),t),a.arc(u.cx,u.cy,x,o(u.y11,u.x11),o(u.y01,u.x01),!t))):a.arc(0,0,r,T,R,t)}if(a.closePath(),n)return a=null,n+""||null}return i.centroid=function(){var n=(+l.apply(this,arguments)+ +h.apply(this,arguments))/2,m=(+v.apply(this,arguments)+ +A.apply(this,arguments))/2-an/2;return[G(m)*n,q(m)*n]},i.innerRadius=function(n){return arguments.length?(l=typeof n=="function"?n:j(+n),i):l},i.outerRadius=function(n){return arguments.length?(h=typeof n=="function"?n:j(+n),i):h},i.cornerRadius=function(n){return arguments.length?(E=typeof n=="function"?n:j(+n),i):E},i.padRadius=function(n){return arguments.length?(z=n==null?null:typeof n=="function"?n:j(+n),i):z},i.startAngle=function(n){return arguments.length?(v=typeof n=="function"?n:j(+n),i):v},i.endAngle=function(n){return arguments.length?(A=typeof n=="function"?n:j(+n),i):A},i.padAngle=function(n){return arguments.length?(B=typeof n=="function"?n:j(+n),i):B},i.context=function(n){return arguments.length?(a=n??null,i):a},i}export{vn as a};
