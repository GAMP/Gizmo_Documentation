const n=async(r,e)=>{if(r==="is_init")return Promise.resolve(!1);throw new Error("git call not supported in cli environment")};export{n as call};
