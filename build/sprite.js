!function(t){function e(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var r={};e.m=t,e.c=r,e.d=function(t,r,n){e.o(t,r)||Object.defineProperty(t,r,{configurable:!1,enumerable:!0,get:n})},e.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(r,"a",r),r},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=2)}([function(t,e,r){"use strict";t.exports=r(3)},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n={identity:[1,0,0,0,1,0,0,0,1],multiply:function(t,e){var r=t[0],n=t[1],o=t[2],i=t[3],a=t[4],u=t[5],c=t[6],s=t[7],f=t[8],l=e[0],h=e[1],d=e[2],v=e[3],p=e[4],y=e[5],m=e[6],g=e[7],w=e[8];e[0]=l*r+v*n+m*o,e[1]=h*r+p*n+g*o,e[2]=d*r+y*n+w*o,e[3]=l*i+v*a+m*u,e[4]=h*i+p*a+g*u,e[5]=d*i+y*a+w*u,e[6]=l*c+v*s+m*f,e[7]=h*c+p*s+g*f,e[8]=d*c+y*s+w*f},vec2_multiply:function(t,e){var r=[];return r[0]=e[0]*t[0]+e[3]*t[1]+e[6],r[1]=e[1]*t[0]+e[4]*t[1]+e[7],r},transpose:function(t){return[t[0],t[3],t[6],t[1],t[4],t[7],t[2],t[5],t[8]]}},o={length:function(t){return Math.sqrt(t[0]*t[0]+t[1]*t[1]+t[2]*t[2])},normalize:function(t){var e=Math.sqrt(t[0]*t[0]+t[1]*t[1]+t[2]*t[2]);return 0===e?[0,0,0]:[t[0]/e,t[1]/e,t[2]/e]},dot:function(t,e){return t[0]*e[0]+t[1]*e[1]+t[2]*e[2]},angle:function(t,e){return Math.acos((t[0]*e[0]+t[1]*e[1]+t[2]*e[2])/(Math.sqrt(t[0]*t[0]+t[1]*t[1]+t[2]*t[2])*Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2])))},cross:function(t,e){return[t[1]*e[2]-e[1]*t[2],t[2]*e[0]-e[2]*t[0],t[0]*e[1]-e[0]*t[1]]},multiply:function(t,e){return[t[0]*e,t[1]*e,t[2]*e]},add:function(t,e){return[t[0]+e[0],t[1]+e[1],t[2]+e[2]]},subtract:function(t,e){return[t[0]-e[0],t[1]-e[1],t[2]-e[2]]},equal:function(t,e){return void 0===t&&void 0===e||void 0!==t&&void 0!==e&&(Math.abs(t[0]-e[0])<1e-7&&Math.abs(t[1]-e[1])<1e-7&&Math.abs(t[2]-e[2])<1e-7)}},i={multiply:function(t,e,r){r=r||new Float32Array(16);var n=e[0],o=e[1],i=e[2],a=e[3],u=e[4],c=e[5],s=e[6],f=e[7],l=e[8],h=e[9],d=e[10],v=e[11],p=e[12],y=e[13],m=e[14],g=e[15],w=t[0],x=t[1],b=t[2],_=t[3],E=t[4],A=t[5],M=t[6],R=t[7],T=t[8],L=t[9],F=t[10],k=t[11],S=t[12],P=t[13],O=t[14],j=t[15];return r[0]=n*w+o*E+i*T+a*S,r[1]=n*x+o*A+i*L+a*P,r[2]=n*b+o*M+i*F+a*O,r[3]=n*_+o*R+i*k+a*j,r[4]=u*w+c*E+s*T+f*S,r[5]=u*x+c*A+s*L+f*P,r[6]=u*b+c*M+s*F+f*O,r[7]=u*_+c*R+s*k+f*j,r[8]=l*w+h*E+d*T+v*S,r[9]=l*x+h*A+d*L+v*P,r[10]=l*b+h*M+d*F+v*O,r[11]=l*_+h*R+d*k+v*j,r[12]=p*w+y*E+m*T+g*S,r[13]=p*x+y*A+m*L+g*P,r[14]=p*b+y*M+m*F+g*O,r[15]=p*_+y*R+m*k+g*j,r},addVectors:function(t,e,r){return r=r||new Float32Array(3),r[0]=t[0]+e[0],r[1]=t[1]+e[1],r[2]=t[2]+e[2],r},subtractVectors:function(t,e,r){return r=r||new Float32Array(3),r[0]=t[0]-e[0],r[1]=t[1]-e[1],r[2]=t[2]-e[2],r},normalize:function(t,e){e=e||new Float32Array(3);var r=Math.sqrt(t[0]*t[0]+t[1]*t[1]+t[2]*t[2]);return r>1e-5&&(e[0]=t[0]/r,e[1]=t[1]/r,e[2]=t[2]/r),e},cross:function(t,e,r){return r=r||new Float32Array(3),r[0]=t[1]*e[2]-t[2]*e[1],r[1]=t[2]*e[0]-t[0]*e[2],r[2]=t[0]*e[1]-t[1]*e[0],r},dot:function(t,e){return t[0]*e[0]+t[1]*e[1]+t[2]*e[2]},distanceSq:function(t,e){var r=t[0]-e[0],n=t[1]-e[1],o=t[2]-e[2];return r*r+n*n+o*o},distance:function(t,e){return Math.sqrt(distanceSq(t,e))},identity:function(t){return t=t||new Float32Array(16),t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t},transpose:function(t,e){return e=e||new Float32Array(16),e[0]=t[0],e[1]=t[4],e[2]=t[8],e[3]=t[12],e[4]=t[1],e[5]=t[5],e[6]=t[9],e[7]=t[13],e[8]=t[2],e[9]=t[6],e[10]=t[10],e[11]=t[14],e[12]=t[3],e[13]=t[7],e[14]=t[11],e[15]=t[15],e},lookAt:function(t,e,r,n){n=n||new Float32Array(16);var o=normalize(subtractVectors(t,e)),i=normalize(cross(r,o)),a=normalize(cross(o,i));return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=0,n[4]=a[0],n[5]=a[1],n[6]=a[2],n[7]=0,n[8]=o[0],n[9]=o[1],n[10]=o[2],n[11]=0,n[12]=t[0],n[13]=t[1],n[14]=t[2],n[15]=1,n},perspective:function(t,e,r,n,o){o=o||new Float32Array(16);var i=Math.tan(.5*Math.PI-.5*t),a=1/(r-n);return o[0]=i/e,o[1]=0,o[2]=0,o[3]=0,o[4]=0,o[5]=i,o[6]=0,o[7]=0,o[8]=0,o[9]=0,o[10]=(r+n)*a,o[11]=-1,o[12]=0,o[13]=0,o[14]=r*n*a*2,o[15]=0,o},orthographic:function(t,e,r,n,o,i,a){return a=a||new Float32Array(16),a[0]=2/(e-t),a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=2/(n-r),a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=2/(o-i),a[11]=0,a[12]=(t+e)/(t-e),a[13]=(r+n)/(r-n),a[14]=(o+i)/(o-i),a[15]=1,a},frustum:function(t,e,r,n,o,i){var a=e-t,u=n-r,c=i-o;return dst[0]=2*o/a,dst[1]=0,dst[2]=0,dst[3]=0,dst[4]=0,dst[5]=2*o/u,dst[6]=0,dst[7]=0,dst[8]=(t+e)/a,dst[9]=(n+r)/u,dst[10]=-(i+o)/c,dst[11]=-1,dst[12]=0,dst[13]=0,dst[14]=-2*o*i/c,dst[15]=0,dst},translation:function(t,e,r,n){return n=n||new Float32Array(16),n[0]=1,n[1]=0,n[2]=0,n[3]=0,n[4]=0,n[5]=1,n[6]=0,n[7]=0,n[8]=0,n[9]=0,n[10]=1,n[11]=0,n[12]=t,n[13]=e,n[14]=r,n[15]=1,n},translate:function(t,e,r,n,o){o=o||new Float32Array(16);var i=t[0],a=t[1],u=t[2],c=t[3],s=t[4],f=t[5],l=t[6],h=t[7],d=t[8],v=t[9],p=t[10],y=t[11],m=t[12],g=t[13],w=t[14],x=t[15];return t!==o&&(o[0]=i,o[1]=a,o[2]=u,o[3]=c,o[4]=s,o[5]=f,o[6]=l,o[7]=h,o[8]=d,o[9]=v,o[10]=p,o[11]=y),o[12]=i*e+s*r+d*n+m,o[13]=a*e+f*r+v*n+g,o[14]=u*e+l*r+p*n+w,o[15]=c*e+h*r+y*n+x,o},xRotation:function(t,e){e=e||new Float32Array(16);var r=Math.cos(t),n=Math.sin(t);return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=r,e[6]=n,e[7]=0,e[8]=0,e[9]=-n,e[10]=r,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e},xRotate:function(t,e,r){r=r||new Float32Array(16);var n=t[4],o=t[5],i=t[6],a=t[7],u=t[8],c=t[9],s=t[10],f=t[11],l=Math.cos(e),h=Math.sin(e);return r[4]=l*n+h*u,r[5]=l*o+h*c,r[6]=l*i+h*s,r[7]=l*a+h*f,r[8]=l*u-h*n,r[9]=l*c-h*o,r[10]=l*s-h*i,r[11]=l*f-h*a,t!==r&&(r[0]=t[0],r[1]=t[1],r[2]=t[2],r[3]=t[3],r[12]=t[12],r[13]=t[13],r[14]=t[14],r[15]=t[15]),r},yRotation:function(t,e){e=e||new Float32Array(16);var r=Math.cos(t),n=Math.sin(t);return e[0]=r,e[1]=0,e[2]=-n,e[3]=0,e[4]=0,e[5]=1,e[6]=0,e[7]=0,e[8]=n,e[9]=0,e[10]=r,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e},yRotate:function(t,e,r){r=r||new Float32Array(16);var n=t[0],o=t[1],i=t[2],a=t[3],u=t[8],c=t[9],s=t[10],f=t[11],l=Math.cos(e),h=Math.sin(e);return r[0]=l*n-h*u,r[1]=l*o-h*c,r[2]=l*i-h*s,r[3]=l*a-h*f,r[8]=l*u+h*n,r[9]=l*c+h*o,r[10]=l*s+h*i,r[11]=l*f+h*a,t!==r&&(r[4]=t[4],r[5]=t[5],r[6]=t[6],r[7]=t[7],r[12]=t[12],r[13]=t[13],r[14]=t[14],r[15]=t[15]),r},zRotation:function(t,e){e=e||new Float32Array(16);var r=Math.cos(t),n=Math.sin(t);return e[0]=r,e[1]=n,e[2]=0,e[3]=0,e[4]=-n,e[5]=r,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=1,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e},zRotate:function(t,e,r){r=r||new Float32Array(16);var n=t[0],o=t[1],i=t[2],a=t[3],u=t[4],c=t[5],s=t[6],f=t[7],l=Math.cos(e),h=Math.sin(e);return r[0]=l*n+h*u,r[1]=l*o+h*c,r[2]=l*i+h*s,r[3]=l*a+h*f,r[4]=l*u-h*n,r[5]=l*c-h*o,r[6]=l*s-h*i,r[7]=l*f-h*a,t!==r&&(r[8]=t[8],r[9]=t[9],r[10]=t[10],r[11]=t[11],r[12]=t[12],r[13]=t[13],r[14]=t[14],r[15]=t[15]),r},axisRotation:function(t,e,r){r=r||new Float32Array(16);var n=t[0],o=t[1],i=t[2],a=Math.sqrt(n*n+o*o+i*i);n/=a,o/=a,i/=a;var u=n*n,c=o*o,s=i*i,f=Math.cos(e),l=Math.sin(e),h=1-f;return r[0]=u+(1-u)*f,r[1]=n*o*h+i*l,r[2]=n*i*h-o*l,r[3]=0,r[4]=n*o*h-i*l,r[5]=c+(1-c)*f,r[6]=o*i*h+n*l,r[7]=0,r[8]=n*i*h+o*l,r[9]=o*i*h-n*l,r[10]=s+(1-s)*f,r[11]=0,r[12]=0,r[13]=0,r[14]=0,r[15]=1,r},axisRotate:function(t,e,r,n){n=n||new Float32Array(16);var o=e[0],i=e[1],a=e[2],u=Math.sqrt(o*o+i*i+a*a);o/=u,i/=u,a/=u;var c=o*o,s=i*i,f=a*a,l=Math.cos(r),h=Math.sin(r),d=1-l,v=c+(1-c)*l,p=o*i*d+a*h,y=o*a*d-i*h,m=o*i*d-a*h,g=s+(1-s)*l,w=i*a*d+o*h,x=o*a*d+i*h,b=i*a*d-o*h,_=f+(1-f)*l,E=t[0],A=t[1],M=t[2],R=t[3],T=t[4],L=t[5],F=t[6],k=t[7],S=t[8],P=t[9],O=t[10],j=t[11];return n[0]=v*E+p*T+y*S,n[1]=v*A+p*L+y*P,n[2]=v*M+p*F+y*O,n[3]=v*R+p*k+y*j,n[4]=m*E+g*T+w*S,n[5]=m*A+g*L+w*P,n[6]=m*M+g*F+w*O,n[7]=m*R+g*k+w*j,n[8]=x*E+b*T+_*S,n[9]=x*A+b*L+_*P,n[10]=x*M+b*F+_*O,n[11]=x*R+b*k+_*j,t!==n&&(n[12]=t[12],n[13]=t[13],n[14]=t[14],n[15]=t[15]),n},scaling:function(t,e,r,n){return n=n||new Float32Array(16),n[0]=t,n[1]=0,n[2]=0,n[3]=0,n[4]=0,n[5]=e,n[6]=0,n[7]=0,n[8]=0,n[9]=0,n[10]=r,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n},scale:function(t,e,r,n,o){return o=o||new Float32Array(16),o[0]=e*t[0],o[1]=e*t[1],o[2]=e*t[2],o[3]=e*t[3],o[4]=r*t[4],o[5]=r*t[5],o[6]=r*t[6],o[7]=r*t[7],o[8]=n*t[8],o[9]=n*t[9],o[10]=n*t[10],o[11]=n*t[11],t!==o&&(o[12]=t[12],o[13]=t[13],o[14]=t[14],o[15]=t[15]),o},inverse:function(t,e){e=e||new Float32Array(16);var r=t[0],n=t[1],o=t[2],i=t[3],a=t[4],u=t[5],c=t[6],s=t[7],f=t[8],l=t[9],h=t[10],d=t[11],v=t[12],p=t[13],y=t[14],m=t[15],g=h*m,w=y*d,x=c*m,b=y*s,_=c*d,E=h*s,A=o*m,M=y*i,R=o*d,T=h*i,L=o*s,F=c*i,k=f*p,S=v*l,P=a*p,O=v*u,j=a*l,C=f*u,U=r*p,B=v*n,I=r*l,N=f*n,D=r*u,G=a*n,q=g*u+b*l+_*p-(w*u+x*l+E*p),X=w*n+A*l+T*p-(g*n+M*l+R*p),Y=x*n+M*u+L*p-(b*n+A*u+F*p),V=E*n+R*u+F*l-(_*n+T*u+L*l),z=1/(r*q+a*X+f*Y+v*V);return e[0]=z*q,e[1]=z*X,e[2]=z*Y,e[3]=z*V,e[4]=z*(w*a+x*f+E*v-(g*a+b*f+_*v)),e[5]=z*(g*r+M*f+R*v-(w*r+A*f+T*v)),e[6]=z*(b*r+A*a+F*v-(x*r+M*a+L*v)),e[7]=z*(_*r+T*a+L*f-(E*r+R*a+F*f)),e[8]=z*(k*s+O*d+j*m-(S*s+P*d+C*m)),e[9]=z*(S*i+U*d+N*m-(k*i+B*d+I*m)),e[10]=z*(P*i+B*s+D*m-(O*i+U*s+G*m)),e[11]=z*(C*i+I*s+G*d-(j*i+N*s+D*d)),e[12]=z*(P*h+C*y+S*c-(j*y+k*c+O*h)),e[13]=z*(I*y+k*o+B*h-(U*h+N*y+S*o)),e[14]=z*(U*c+G*y+O*o-(D*y+P*o+B*c)),e[15]=z*(D*h+j*o+N*c-(I*c+G*h+C*o)),e},transformVector:function(t,e,r){r=r||new Float32Array(4);for(var n=0;n<4;++n){r[n]=0;for(var o=0;o<4;++o)r[n]+=e[o]*t[4*o+n]}return r},transformPoint:function(t,e,r){r=r||new Float32Array(3);var n=e[0],o=e[1],i=e[2],a=n*t[3]+o*t[7]+i*t[11]+t[15];return r[0]=(n*t[0]+o*t[4]+i*t[8]+t[12])/a,r[1]=(n*t[1]+o*t[5]+i*t[9]+t[13])/a,r[2]=(n*t[2]+o*t[6]+i*t[10]+t[14])/a,r},transformDirection:function(t,e,r){r=r||new Float32Array(3);var n=e[0],o=e[1],i=e[2];return r[0]=n*t[0]+o*t[4]+i*t[8],r[1]=n*t[1]+o*t[5]+i*t[9],r[2]=n*t[2]+o*t[6]+i*t[10],r},transformNormal:function(t,e,r){r=r||new Float32Array(3);var n=inverse(t),o=e[0],i=e[1],a=e[2];return r[0]=o*n[0]+i*n[1]+a*n[2],r[1]=o*n[4]+i*n[5]+a*n[6],r[2]=o*n[8]+i*n[9]+a*n[10],r},copy:function(t,e){return e=e||new Float32Array(16),e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[4]=t[4],e[5]=t[5],e[6]=t[6],e[7]=t[7],e[8]=t[8],e[9]=t[9],e[10]=t[10],e[11]=t[11],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15],e}};e.mat3=n,e.vec3=o,e.m4=i},function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function o(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t){return function(){var e=t.apply(this,arguments);return new Promise(function(t,r){function n(o,i){try{var a=e[o](i),u=a.value}catch(t){return void r(t)}if(!a.done)return Promise.resolve(u).then(function(t){n("next",t)},function(t){n("throw",t)});t(u)}return n("next")})}}var a=r(0),u=n(a),c=function(){var t=i(u.default.mark(function t(){var e,r,n,i,a,c,s,l,h,d,v,p,y;return u.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return y=function t(e){var r=.001*e,n=Math.min(.1,r-p);p=r,d(n),v(),requestAnimationFrame(t)},v=function(){n.viewport(0,0,n.canvas.width,n.canvas.height),n.clear(n.COLOR_BUFFER_BIT),i.forEach(function(t,r){var n=t.x,o=t.y,i=t.textureInfo.width*t.xScale,a=t.textureInfo.height*t.yScale,u=t.textureInfo.width*t.offX,c=t.textureInfo.height*t.offY,s=t.textureInfo.width*t.width,f=t.textureInfo.height*t.height;e.im.drawImage(t.textureInfo.texture,t.textureInfo.width,t.textureInfo.height,u,c,s,f,n,o,i,a,t.rotation)})},d=function(t){i.forEach(function(e){e.x+=e.dx*c*t,e.y+=e.dy*c*t,e.x<0&&(e.dx=1),e.x>=n.canvas.width&&(e.dx=-1),e.y<0&&(e.dy=1),e.y>=n.canvas.height&&(e.dy=-1),e.rotation+=e.deltaRotation*t})},e=f.default.create(document.getElementById("gl")),t.next=6,e.im.loadTex(["../assets/tex.jpg","../assets/hero.jpg","../assets/ji.jpg"]);case 6:for(r=t.sent,n=e.gl,i=[],a=3,c=60,s=0;s<a;++s)l={x:Math.random()*n.canvas.width,y:Math.random()*n.canvas.height,dx:Math.random()>.5?-1:1,dy:Math.random()>.5?-1:1,xScale:.25*Math.random()+.25,yScale:.25*Math.random()+.25,offX:.75*Math.random(),offY:.75*Math.random()},o(l,"offX",0),o(l,"offY",0),o(l,"rotation",Math.random()*Math.PI*2),o(l,"deltaRotation",(.5+.5*Math.random())*(Math.random()>.5?-1:1)),o(l,"width",1),o(l,"height",1),o(l,"textureInfo",r[Math.random()*r.length|0]),h=l,i.push(h);p=0,requestAnimationFrame(y);case 14:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),s=r(6),f=n(s);r(10),document.addEventListener("DOMContentLoaded",c,!1)},function(t,e,r){"use strict";var n=function(){return this}()||Function("return this")(),o=n.regeneratorRuntime&&Object.getOwnPropertyNames(n).indexOf("regeneratorRuntime")>=0,i=o&&n.regeneratorRuntime;if(n.regeneratorRuntime=void 0,t.exports=r(4),o)n.regeneratorRuntime=i;else try{delete n.regeneratorRuntime}catch(t){n.regeneratorRuntime=void 0}},function(t,e,r){"use strict";(function(t){var e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};!function(r){function n(t,e,r,n){var o=e&&e.prototype instanceof i?e:i,a=Object.create(o.prototype),u=new v(n||[]);return a._invoke=f(t,r,u),a}function o(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}function i(){}function a(){}function u(){}function c(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function s(t){function r(n,i,a,u){var c=o(t[n],t,i);if("throw"!==c.type){var s=c.arg,f=s.value;return f&&"object"===(void 0===f?"undefined":e(f))&&w.call(f,"__await")?Promise.resolve(f.__await).then(function(t){r("next",t,a,u)},function(t){r("throw",t,a,u)}):Promise.resolve(f).then(function(t){s.value=t,a(s)},u)}u(c.arg)}function n(t,e){function n(){return new Promise(function(n,o){r(t,e,n,o)})}return i=i?i.then(n,n):n()}var i;this._invoke=n}function f(t,e,r){var n=R;return function(i,a){if(n===L)throw new Error("Generator is already running");if(n===F){if("throw"===i)throw a;return y()}for(r.method=i,r.arg=a;;){var u=r.delegate;if(u){var c=l(u,r);if(c){if(c===k)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===R)throw n=F,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=L;var s=o(t,e,r);if("normal"===s.type){if(n=r.done?F:T,s.arg===k)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n=F,r.method="throw",r.arg=s.arg)}}}function l(t,e){var r=t.iterator[e.method];if(r===m){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=m,l(t,e),"throw"===e.method))return k;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return k}var n=o(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,k;var i=n.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=m),e.delegate=null,k):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,k)}function h(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function d(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function v(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(h,this),this.reset(!0)}function p(t){if(t){var e=t[b];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,n=function e(){for(;++r<t.length;)if(w.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=m,e.done=!0,e};return n.next=n}}return{next:y}}function y(){return{value:m,done:!0}}var m,g=Object.prototype,w=g.hasOwnProperty,x="function"==typeof Symbol?Symbol:{},b=x.iterator||"@@iterator",_=x.asyncIterator||"@@asyncIterator",E=x.toStringTag||"@@toStringTag",A="object"===e(t),M=r.regeneratorRuntime;if(M)return void(A&&(t.exports=M));M=r.regeneratorRuntime=A?t.exports:{},M.wrap=n;var R="suspendedStart",T="suspendedYield",L="executing",F="completed",k={},S={};S[b]=function(){return this};var P=Object.getPrototypeOf,O=P&&P(P(p([])));O&&O!==g&&w.call(O,b)&&(S=O);var j=u.prototype=i.prototype=Object.create(S);a.prototype=j.constructor=u,u.constructor=a,u[E]=a.displayName="GeneratorFunction",M.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===a||"GeneratorFunction"===(e.displayName||e.name))},M.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,u):(t.__proto__=u,E in t||(t[E]="GeneratorFunction")),t.prototype=Object.create(j),t},M.awrap=function(t){return{__await:t}},c(s.prototype),s.prototype[_]=function(){return this},M.AsyncIterator=s,M.async=function(t,e,r,o){var i=new s(n(t,e,r,o));return M.isGeneratorFunction(e)?i:i.next().then(function(t){return t.done?t.value:i.next()})},c(j),j[E]="Generator",j[b]=function(){return this},j.toString=function(){return"[object Generator]"},M.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},M.values=p,v.prototype={constructor:v,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=m,this.done=!1,this.delegate=null,this.method="next",this.arg=m,this.tryEntries.forEach(d),!t)for(var e in this)"t"===e.charAt(0)&&w.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=m)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){function e(e,n){return i.type="throw",i.arg=t,r.next=e,n&&(r.method="next",r.arg=m),!!n}if(this.done)throw t;for(var r=this,n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n],i=o.completion;if("root"===o.tryLoc)return e("end");if(o.tryLoc<=this.prev){var a=w.call(o,"catchLoc"),u=w.call(o,"finallyLoc");if(a&&u){if(this.prev<o.catchLoc)return e(o.catchLoc,!0);if(this.prev<o.finallyLoc)return e(o.finallyLoc)}else if(a){if(this.prev<o.catchLoc)return e(o.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return e(o.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&w.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,k):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),k},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),d(r),k}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;d(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:p(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=m),k}}}(function(){return this}()||Function("return this")())}).call(e,r(5)(t))},function(t,e,r){"use strict";t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),t.webpackPolyfill=1),t}},function(t,e,r){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var a=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),u=r(7),c=r(8),s=function(t){return t&&t.__esModule?t:{default:t}}(c),f=function(t){function e(t){n(this,e);var r=o(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));if(r.dpr=window.devicePixelRatio||1,r.container=t||null,r.gl=null,r.im=null,r.then=0,!r.container||"CANVAS"!==r.container.nodeName){var i=document.createElement("canvas");i.id="gl",i.oncontextmenu=function(){return!1},r.container||document.body.appendChild(i),r.container&&"CANVAS"!==r.container.nodeName&&r.container.appendChild(i),r.container=i}return r.init(),r}return i(e,t),a(e,[{key:"init",value:function(){this.on(function(t){return console.log("get published content: "+t)},"Event test"),this.on(function(t){return console.log("get content: "+t)},"sss"),this._width=this.container.parentNode.clientWidth,this._height=this.container.parentNode.clientHeight,this.width=this.dpr*this._width,this.height=this.dpr*this._height,this.container.style.width=this._width+"px",this.container.style.height=this._height+"px",this.container.width=~~this.width,this.container.height=~~this.height,this.im=(0,s.default)(this.container),this.gl=this.im.gl,this.initEvent()}},{key:"dp",value:function(t){return~~t*this.dpr}},{key:"initEvent",value:function(){var t=this;["mousedown","mouseup","mousemove","touchstart","touchend","touchmove","click"].forEach(function(e){t.container.addEventListener(e,function(r){var n=r.target.getBoundingClientRect(),o=n.left,i=n.top,a=void 0,u=void 0,c={originalEvent:r,type:e};if(r.changedTouches){var s=r.changedTouches[0],f=s.clientX,l=s.clientY;a=Math.round(f-o),u=Math.round(l-i)}else a=Math.round(r.clientX-o),u=Math.round(r.clientY-i);Object.assign(c,{originalX:a,originalY:u}),t.emit("native",e,c)},!0)})}},{key:"viewport",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.gl;t.viewport(0,0,t.canvas.width,t.canvas.height)}},{key:"clear",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.gl;t.clear(t.COLOR_BUFFER_BIT)}},{key:"update",value:function(){}},{key:"draw",value:function(){}},{key:"render",value:function(t){var e=this;console.log("render"),(0,u.raf)(function(){return e.loop()})}},{key:"loop",value:function(t){var e=this,r=.001*t;this.deltaTime=Math.min(.1,r-this.then),this.then=r,console.log("loop"),this.update(),this.draw(),(0,u.raf)(function(){return e.loop()})}}]),e}(u.Event),l={create:function(){for(var t=arguments.length,e=Array(t),r=0;r<t;r++)e[r]=arguments[r];return new(Function.prototype.bind.apply(f,[null].concat(e)))}};e.default=l},function(t,e,r){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var o=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),i=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(t){window.setTimeout(t,1e3/60)},a=function(t,e){!function r(){t.length>0&&t.shift().apply(e||{},[r].concat(Array.prototype.slice.call(arguments,0)))}()},u=function(){function t(){n(this,t),this.subscribers=new Map([[]])}return o(t,[{key:"on",value:function(t,e){var r=this.subscribers;if(!r.get(t))return r.set(t,[e]);r.set(t,r.get(t).push(e))}},{key:"emit",value:function(t,e){var r=this.subscribers.get(t);if(r){var n=!0,o=!1,i=void 0;try{for(var a,u=r[Symbol.iterator]();!(n=(a=u.next()).done);n=!0){a.value.apply(this,[].slice.call(arguments,1))}}catch(t){o=!0,i=t}finally{try{!n&&u.return&&u.return()}finally{if(o)throw i}}}}}]),t}();e.queue=a,e.Event=u,e.raf=i},function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function o(t){return function(){var e=t.apply(this,arguments);return new Promise(function(t,r){function n(o,i){try{var a=e[o](i),u=a.value}catch(t){return void r(t)}if(!a.done)return Promise.resolve(u).then(function(t){n("next",t)},function(t){n("throw",t)});t(u)}return n("next")})}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var a=r(0),u=n(a),c=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),s=r(9),f=n(s),l=r(1),h=function(){function t(e){i(this,t),this.canvas=e,this.gl=void 0,this.transform=new f.default,this._resources=new Map,this.init()}return c(t,[{key:"init",value:function(){this.gl=this.canvas.getContext("webgl")||this.canvas.getContext("experimental-webgl");var t=this.gl;if(!t)throw new Error("connot get gl context!");var e=this.createProgram(t);this.positionLocation=t.getAttribLocation(e,"a_position"),this.texcoordLocation=t.getAttribLocation(e,"a_texcoord"),this.matrixLocation=t.getUniformLocation(e,"u_matrix"),this.textureMatrixLocation=t.getUniformLocation(e,"u_textureMatrix");var r=(t.getUniformLocation(e,"u_texture"),t.createBuffer());t.bindBuffer(t.ARRAY_BUFFER,r),this.positionBuffer=r;var n=[0,0,0,1,1,0,1,0,0,1,1,1];t.bufferData(t.ARRAY_BUFFER,new Float32Array(n),t.STATIC_DRAW);var o=t.createBuffer();t.bindBuffer(t.ARRAY_BUFFER,o),this.texcoordBuffer=o;var i=[0,0,0,1,1,0,1,0,0,1,1,1];t.bufferData(t.ARRAY_BUFFER,new Float32Array(i),t.STATIC_DRAW)}},{key:"getFragmentShaderSource",value:function(){return"precision mediump float;\n        \n        varying vec2 v_texcoord;\n        \n        uniform sampler2D u_texture;\n        \n        void main() {\n           gl_FragColor = texture2D(u_texture, v_texcoord);\n        }"}},{key:"getVertexShaderSource",value:function(){return"attribute vec4 a_position;\n        attribute vec2 a_texcoord;\n        \n        uniform mat4 u_matrix;\n        uniform mat4 u_textureMatrix;\n        \n        varying vec2 v_texcoord;\n        \n        void main() {\n           gl_Position = u_matrix * a_position;\n           v_texcoord = (u_textureMatrix * vec4(a_texcoord, 0, 1)).xy;\n        }"}},{key:"getFragmentShader",value:function(t){return this.getShader(t,t.FRAGMENT_SHADER,this.getFragmentShaderSource())}},{key:"getVertexShader",value:function(t){return this.getShader(t,t.VERTEX_SHADER,this.getVertexShaderSource())}},{key:"getShader",value:function(t,e,r){var n=t.createShader(e);return t.shaderSource(n,r),t.compileShader(n),t.getShaderParameter(n,t.COMPILE_STATUS)?n:(console.log(t.getShaderInfoLog(n)),null)}},{key:"createProgram",value:function(t){var e=this.getFragmentShader(t),r=this.getVertexShader(t),n=t.createProgram();return t.attachShader(n,r),t.attachShader(n,e),t.linkProgram(n),t.getProgramParameter(n,t.LINK_STATUS)||console.log("Could not initialise shaders:"+t.getProgramInfoLog(n)),t.useProgram(n),n}},{key:"loadTexture",value:function(t){var e=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3e4;if("string"!=typeof t)throw new Error("loadTexture faild");var n=this._resources,o=t;if(!n.has(o))return new Promise(function(i,a){var u=e.gl,c=u.createTexture();u.bindTexture(u.TEXTURE_2D,c),u.texImage2D(u.TEXTURE_2D,0,u.RGBA,1,1,0,u.RGBA,u.UNSIGNED_BYTE,new Uint8Array([0,0,255,255])),u.texParameteri(u.TEXTURE_2D,u.TEXTURE_WRAP_S,u.CLAMP_TO_EDGE),u.texParameteri(u.TEXTURE_2D,u.TEXTURE_WRAP_T,u.CLAMP_TO_EDGE),u.texParameteri(u.TEXTURE_2D,u.TEXTURE_MIN_FILTER,u.LINEAR);var s={width:1,height:1,texture:c},f=setTimeout(function(){a(new Error("loadTexture timeout"))},r),l=new Image;l.addEventListener("load",function(){s.width=l.width,s.height=l.height,u.bindTexture(u.TEXTURE_2D,s.texture),u.texImage2D(u.TEXTURE_2D,0,u.RGBA,u.RGBA,u.UNSIGNED_BYTE,l),i(s),n.set(o,s),clearTimeout(f)}),l.src=t})}},{key:"loadTex",value:function(){function t(t){return e.apply(this,arguments)}var e=o(u.default.mark(function t(e){var r,n,o;return u.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if("string"!=typeof e){t.next=4;break}return t.next=3,this.loadTexture(e);case 3:return t.abrupt("return",t.sent);case 4:if(!Array.isArray(e)){t.next=22;break}r=[],n=0;case 7:if(!(n<e.length)){t.next=21;break}if("string"!=typeof(o=e[n])){t.next=17;break}return t.t0=r,t.next=13,this.loadTexture(o);case 13:t.t1=t.sent,t.t0.push.call(t.t0,t.t1),t.next=18;break;case 17:throw new Error("loadTexs faild in progress:"+n);case 18:n++,t.next=7;break;case 21:return t.abrupt("return",r);case 22:case"end":return t.stop()}},t,this)}));return t}()},{key:"drawImage",value:function(t,e,r,n,o,i,a,u,c,s,f,h){var d=this.gl;void 0===u&&(u=n,n=0),void 0===c&&(c=o,o=0),void 0===i&&(i=e),void 0===a&&(a=r),void 0===s&&(s=i,i=e),void 0===f&&(f=a,a=r),void 0===h&&(h=0),d.bindTexture(d.TEXTURE_2D,t),d.bindBuffer(d.ARRAY_BUFFER,this.positionBuffer),d.enableVertexAttribArray(this.positionLocation),d.vertexAttribPointer(this.positionLocation,2,d.FLOAT,!1,0,0),d.bindBuffer(d.ARRAY_BUFFER,this.texcoordBuffer),d.enableVertexAttribArray(this.texcoordLocation),d.vertexAttribPointer(this.texcoordLocation,2,d.FLOAT,!1,0,0);var v=l.m4.orthographic(0,d.canvas.width,d.canvas.height,0,-1,1);v=l.m4.translate(v,u,c,0),v=l.m4.scale(v,s,f,1),d.uniformMatrix4fv(this.matrixLocation,!1,v);var p=l.m4.scaling(1/e,1/r,1);p=l.m4.translate(p,.5*e,.5*r,0),p=l.m4.zRotate(p,h),p=l.m4.translate(p,-.5*e,-.5*r,0),p=l.m4.translate(p,n,o,0),p=l.m4.scale(p,i,a,1),d.uniformMatrix4fv(this.textureMatrixLocation,!1,p),d.uniform1i(this.textureLocation,0),d.drawArrays(d.TRIANGLES,0,6)}}]),t}(),d=function(){for(var t=arguments.length,e=Array(t),r=0;r<t;r++)e[r]=arguments[r];return new(Function.prototype.bind.apply(h,[null].concat(e)))};e.default=d},function(t,e,r){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var o=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),i=r(1),a=function(){function t(){n(this,t),this.stack=[],this.restore()}return o(t,[{key:"restore",value:function(){this.stack.pop(),this.stack.length<1&&(this.stack[0]=i.m4.identity())}},{key:"save",value:function(){this.stack.push(this.getCurrentMatrix())}},{key:"getCurrentMatrix",value:function(){return this.stack[this.stack.length-1].slice()}},{key:"setCurrentMatrix",value:function(){return this.stack[this.stack.length-1]=m}},{key:"translate",value:function(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,n=this.getCurrentMatrix();this.setCurrentMatrix(i.m4.translate(n,t,e,r))}},{key:"rotateZ",value:function(t){var e=this.getCurrentMatrix();this.setCurrentMatrix(i.m4.zRotate(e,t))}},{key:"scale",value:function(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,n=this.getCurrentMatrix();this.setCurrentMatrix(i.m4.scale(n,t,e,r))}}]),t}();e.default=a},function(t,e,r){var n=r(11);"string"==typeof n&&(n=[[t.i,n,""]]);r(13)(n,{});n.locals&&(t.exports=n.locals)},function(t,e,r){e=t.exports=r(12)(),e.push([t.i,".main {\n  background: blue\n}\n\nbody {\n  background: yellow\n}",""])},function(t,e,r){"use strict";t.exports=function(){var t=[];return t.toString=function(){for(var t=[],e=0;e<this.length;e++){var r=this[e];r[2]?t.push("@media "+r[2]+"{"+r[1]+"}"):t.push(r[1])}return t.join("")},t.i=function(e,r){"string"==typeof e&&(e=[[null,e,""]]);for(var n={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(n[i]=!0)}for(o=0;o<e.length;o++){var a=e[o];"number"==typeof a[0]&&n[a[0]]||(r&&!a[2]?a[2]=r:r&&(a[2]="("+a[2]+") and ("+r+")"),t.push(a))}},t}},function(t,e){function r(t,e){for(var r=0;r<t.length;r++){var n=t[r],o=h[n.id];if(o){o.refs++;for(var i=0;i<o.parts.length;i++)o.parts[i](n.parts[i]);for(;i<n.parts.length;i++)o.parts.push(c(n.parts[i],e))}else{for(var a=[],i=0;i<n.parts.length;i++)a.push(c(n.parts[i],e));h[n.id]={id:n.id,refs:1,parts:a}}}}function n(t){for(var e=[],r={},n=0;n<t.length;n++){var o=t[n],i=o[0],a=o[1],u=o[2],c=o[3],s={css:a,media:u,sourceMap:c};r[i]?r[i].parts.push(s):e.push(r[i]={id:i,parts:[s]})}return e}function o(t,e){var r=p(),n=g[g.length-1];if("top"===t.insertAt)n?n.nextSibling?r.insertBefore(e,n.nextSibling):r.appendChild(e):r.insertBefore(e,r.firstChild),g.push(e);else{if("bottom"!==t.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");r.appendChild(e)}}function i(t){t.parentNode.removeChild(t);var e=g.indexOf(t);e>=0&&g.splice(e,1)}function a(t){var e=document.createElement("style");return e.type="text/css",o(t,e),e}function u(t){var e=document.createElement("link");return e.rel="stylesheet",o(t,e),e}function c(t,e){var r,n,o;if(e.singleton){var c=m++;r=y||(y=a(e)),n=s.bind(null,r,c,!1),o=s.bind(null,r,c,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(r=u(e),n=l.bind(null,r),o=function(){i(r),r.href&&URL.revokeObjectURL(r.href)}):(r=a(e),n=f.bind(null,r),o=function(){i(r)});return n(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;n(t=e)}else o()}}function s(t,e,r,n){var o=r?"":n.css;if(t.styleSheet)t.styleSheet.cssText=w(e,o);else{var i=document.createTextNode(o),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(i,a[e]):t.appendChild(i)}}function f(t,e){var r=e.css,n=e.media;if(n&&t.setAttribute("media",n),t.styleSheet)t.styleSheet.cssText=r;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(r))}}function l(t,e){var r=e.css,n=e.sourceMap;n&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n))))+" */");var o=new Blob([r],{type:"text/css"}),i=t.href;t.href=URL.createObjectURL(o),i&&URL.revokeObjectURL(i)}var h={},d=function(t){var e;return function(){return void 0===e&&(e=t.apply(this,arguments)),e}},v=d(function(){return/msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase())}),p=d(function(){return document.head||document.getElementsByTagName("head")[0]}),y=null,m=0,g=[];t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");e=e||{},void 0===e.singleton&&(e.singleton=v()),void 0===e.insertAt&&(e.insertAt="bottom");var o=n(t);return r(o,e),function(t){for(var i=[],a=0;a<o.length;a++){var u=o[a],c=h[u.id];c.refs--,i.push(c)}if(t){r(n(t),e)}for(var a=0;a<i.length;a++){var c=i[a];if(0===c.refs){for(var s=0;s<c.parts.length;s++)c.parts[s]();delete h[c.id]}}}};var w=function(){var t=[];return function(e,r){return t[e]=r,t.filter(Boolean).join("\n")}}()}]);