/*! For license information please see 2855.a831ea50.js.LICENSE.txt */
                    function ${a.name}(s) {
                      return typeof s === 'function' || (Object.prototype.toString.call(s) === '[object Object]' && !${r}(s));
                    }
                  `,i=e.get("body").filter((e=>e.isImportDeclaration())).pop();return i&&i.insertAfter(s),n.runtimeIsSlot=a,a}))}else{let a;r.forEach((r=>{t.set(r,(()=>(a||(a=Dd.addNamespace(e,"vue",{ensureLiveReference:!0})),_a.memberExpression(a,_a.identifier(r)))))}));const n={},{enableObjectSlots:s=!0}=t.opts;s&&t.set("@vue/babel-plugin-jsx/runtimeIsSlot",(()=>{if(n.runtimeIsSlot)return n.runtimeIsSlot;const r=e.scope.generateUidIdentifier("isSlot"),{object:s}=t.get("isVNode")(),i=QO.ast`
                    function ${r.name}(s) {
                      return typeof s === 'function' || (Object.prototype.toString.call(s) === '[object Object]' && !${s.name}.isVNode(s));
                    }
                  `,o=e.get("body").filter((e=>e.isVariableDeclaration()&&e.node.declarations.some((e=>{var t;return(null==(t=e.id)?void 0:t.name)===a.name})))).pop();return o&&o.insertAfter(i),r}))}const{opts:{pragma:n=""},file:s}=t;if(n&&t.set("createVNode",(()=>_a.identifier(n))),s.ast.comments)for(const e of s.ast.comments){const r=JO.exec(e.value);r&&t.set("createVNode",(()=>_a.identifier(r[1])))}}}}})})}));async function eD(e){return i.transform(e,{plugins:[ZO]}).code}}}]);