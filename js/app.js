const monthlyID = document.getElementById('monthlyID');
const annuallyID = document.getElementById('annuallyID');
const cardDivId = document.getElementById('cards-div');
// annually button operation
const annually=()=>{
    monthlyID.setAttribute('class', 'hover-button my-1 mx-3');
    annuallyID.setAttribute('class', 'primary-button my-1 mx-3 mx-md-0'); 
    cardDivId.textContent='';
    cardDivId.innerHTML=`
        <div class="card mb-3 " style="max-width: 22rem; background-color: #fafafa;">
        <div  class="card-header border-0"><span style="font-size: 70px;" class="fw-bold">$500</span><span class="text-secondary">/month</span> <br> <span class="fs-4">Business Class</span> <br> <span class="text-secondary">For small teams or office</span></div>
        <div style="padding: 40px 0px;" class="card-body border-0">
        <!-- <h5 class="card-title">Success card title</h5> -->
        <p class="card-text">Drag & Drop Builder</p>
        <p class="card-text">1,000's of Templates</p>
        <p class="card-text">Blog Support Tools</p>
        <p class="card-text">eCommerce Store</p>
        </div>
    <div class="card-footer bg-transparent border-0"><button class="primary-button my-1 mx-3 mx-md-0 text-center">Start free trial</button></div>
    </div>
    <div class="card mb-3 ms-0 ms-md-4" style="max-width: 22rem; background-color: #fafafa;">
        <div  class="card-header border-0"><span style="font-size: 70px;" class="fw-bold">$800</span><span class="text-secondary">/month</span> <br> <span class="fs-4">Business Class</span> <br> <span class="text-secondary">For small teams or office</span></div>
        <div style="padding: 40px 0px;" class="card-body border-0">
        <!-- <h5 class="card-title">Success card title</h5> -->
        <p class="card-text">Drag & Drop Builder</p>
        <p class="card-text">1,000's of Templates</p>
        <p class="card-text">Blog Support Tools</p>
        <p class="card-text">eCommerce Store</p>
        </div>
    <div class="card-footer bg-transparent border-0">
        <button class="border-0 bg-transparent text-primary py-3">Start 14 days trail</button>
        <button class="primary-button my-1 mx-3 mx-md-0 text-center">Subscribe Now</button>                   
    </div>               
    </div>
    
    `;

}
// monthly button operation 
const monthly=()=>{
    monthlyID.setAttribute('class', 'primary-button my-1 mx-3 mx-md-0');
    annuallyID.setAttribute('class', 'hover-button my-1 mx-3'); 
    cardDivId.textContent='';
    cardDivId.innerHTML=`
    <div class="card mb-3 " style="max-width: 22rem; background-color: #fafafa;">
                    <div  class="card-header border-0"><span style="font-size: 70px;" class="fw-bold">$10</span><span class="text-secondary">/month</span> <br> <span class="fs-4">Business Class</span> <br> <span class="text-secondary">For small teams or office</span></div>
                    <div style="padding: 40px 0px;" class="card-body border-0">
                    <!-- <h5 class="card-title">Success card title</h5> -->
                    <p class="card-text">Drag & Drop Builder</p>
                    <p class="card-text">1,000's of Templates</p>
                    <p class="card-text">Blog Support Tools</p>
                    <p class="card-text">eCommerce Store</p>
                    </div>
                <div class="card-footer bg-transparent border-0"><button class="primary-button my-1 mx-3 mx-md-0 text-center">Start free trial</button></div>
              </div>
                <div class="card mb-3 ms-0 ms-md-4" style="max-width: 22rem; background-color: #fafafa;">
                    <div  class="card-header border-0"><span style="font-size: 70px;" class="fw-bold">$99</span><span class="text-secondary">/month</span> <br> <span class="fs-4">Business Class</span> <br> <span class="text-secondary">For small teams or office</span></div>
                    <div style="padding: 40px 0px;" class="card-body border-0">
                    <!-- <h5 class="card-title">Success card title</h5> -->
                    <p class="card-text">Drag & Drop Builder</p>
                    <p class="card-text">1,000's of Templates</p>
                    <p class="card-text">Blog Support Tools</p>
                    <p class="card-text">eCommerce Store</p>
                    </div>
                <div class="card-footer bg-transparent border-0">
                    <button class="border-0 bg-transparent text-primary py-3">Start 14 days trail</button>
                    <button class="primary-button my-1 mx-3 mx-md-0 text-center">Subscribe Now</button>                   
                </div>               
              </div>
    `;
}