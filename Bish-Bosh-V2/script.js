document.addEventListener("DOMContentLoaded", function () 
{
    const btn = document.getElementById("myButton");
    btn.addEventListener("click", BishBosh());
});

function BishBosh(maxCount, bishDivider, boshDivider) 
            {
                for (let number = 1; number <= maxCount; number++) 
                {
                    let output = "";
    
                    if (number % bishDivider === 0) {
                        output += "Bish";
                    }
    
                    if (number % boshDivider === 0) {
                        output += "Bosh";
                    }
    
                    if (output === "") {
                        output = number;
                    }
    
                    console.log(output);
    
                }
            }
    
