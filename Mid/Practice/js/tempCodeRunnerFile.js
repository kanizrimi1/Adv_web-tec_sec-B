getData(1).then((res)=>
{
    console.log(res);
    getData(2).then((res)=>
    {
        console.log(res);
    });

});
