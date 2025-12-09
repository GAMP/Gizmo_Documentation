const e=async(r,t)=>{if(r==="is_init")return Promise.resolve(!1);throw new Error("git call not supported in static environment")};export{e as call};
