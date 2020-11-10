import { requirePropFactory } from '@material-ui/core';
import React from 'react';
import './components/Sliders';
// import Sliders from './components/Sliders';
// import { SLIDE_INFO} from './components/contants';
// import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';




function App(){
  
  return(
    <div className='app'>
       {/* <!--   Start: Header    --> */}
    <header>
        <div class="content-max-width loginaccount-outercontainer">

            {/* <!--   Header Top Menu    --> */}
            <nav class="header-top-menu">
                <a href="https://www.turners.co.nz/Cars/">Cars</a>
                <a href="https://www.turners.co.nz/Trucks-Machinery/">Trucks &amp; Machinery</a>
                <a href="https://www.turners.co.nz/Damaged-Vehicles/">Damaged &amp; End of Life</a>
                <a href="https://www.turners.co.nz/boats-marine/">Boats &amp; Marine</a>
                <a href="https://www.turners.co.nz/motorcycles-scooters/">Motorcycles &amp; Scooters</a>
                <a href="https://www.turners.co.nz/General-Goods/">General Goods</a>
                <a href="https://www.turners.co.nz/buses-caravans/">Buses, Caravans &amp; Motorhomes</a>
            </nav>

            {/* <!--    Logo    --> */}
                <a href="https://www.turners.co.nz/" class="logo">
                    <span class="fallback-logo"></span>
                </a>

            <div class="small-screen-panel-triggers">
                <a class="text-button" href="https://www.turners.co.nz/Company/Branches/"><span class="icon-map-marker"></span></a>
                <button class="text-button account-panel-trigger"><span class="icon-user"></span></button>
                <a class="text-button" href="tel:0800 887 637"><span class="icon-phone"></span></a>
                <button class="text-button search-panel-trigger"><span class="icon-search"></span></button>
                <button class="text-button small-screen-menu-panel-trigger"><span class="icon-bars"></span></button>
            </div>

            

        </div>
        
{/* <!--   Start: Large Screen Main Menu   --> */}
<nav class="large-screen-main-menu">
    <div class="content-max-width"> 

        
        <ul class="left-menu">
            <li><a href="https://www.turners.co.nz/Company/Search/" class="find-link">Search our Site</a></li>



<li>
    
    <a href="#" class="sub-menu-trigger">Finance &amp; Insurance</a>

    
    <div class="sub-menu">
        



        <a href="https://www.turners.co.nz/Finance/" title="Finance Information" data-href="/Finance/">Finance Information</a>
        <a href="../index.html" title="Car Insurance Information" data-href="/Finance/car-insurance/">Car Insurance Information</a>
        <a href="https://www.turners.co.nz/Finance/car--personal-finance/" title="Car &amp; Personal Finance Info" data-href="/Finance/car--personal-finance/">Car &amp; Personal Finance Info</a>
        <a href="https://www.turners.co.nz/Finance/Personal-Finance-Application/" title="Apply Online for Car/Personal Finance" data-href="/Finance/Personal-Finance-Application/">Apply Online for Car/Personal Finance</a>
        <a href="https://www.turners.co.nz/Finance/Business-Finance-Application/" title="Business Finance Application Form" data-href="/Finance/Business-Finance-Application/">Business Finance Application Form</a>
        <a href="https://www.turners.co.nz/Finance/legal-information/" title="Legal Information" data-href="/Finance/legal-information/">Legal Information</a>
        <a href="https://www.turners.co.nz/Finance/insurance-policies/" title="Insurance Policy Information" data-href="/Finance/insurance-policies/">Insurance Policy Information</a>
        <a href="https://www.turners.co.nz/Finance/car--personal-finance/finance-faqs/" data-href="/Finance/car--personal-finance/finance-faqs/">FAQs about Finance</a>

    </div>
</li>

<li>
    
    <a href="#" class="sub-menu-trigger">How to Buy</a>

    
    <div class="sub-menu">
        



        <a href="https://www.turners.co.nz/Cars/how-to-buy/" data-href="/Cars/how-to-buy/">Ways to Buy</a>
        <a href="https://www.turners.co.nz/Cars/how-to-buy/book-a-test-drive/" data-href="/Cars/how-to-buy/book-a-test-drive/">Book a test drive</a>
        <a href="https://www.turners.co.nz/Cars/information/how-to-pay/" data-href="/Cars/information/how-to-pay/">How to pay</a>
        <a href="https://www.turners.co.nz/Cars/how-to-buy/how-to-buy-faqs/" data-href="/Cars/how-to-buy/how-to-buy-faqs/">FAQs about Buying</a>

    </div>
</li>

<li>
    
    <a href="#" class="sub-menu-trigger">Sell your Car</a>

    
    <div class="sub-menu">
        



        <a href="https://www.turners.co.nz/Cars/Cash-Now/" data-href="/Cars/Cash-Now/">Interested in selling your car?</a>
        <a href="https://www.turners.co.nz/Cars/sell-your-car/selling-your-car-faqs/" data-href="/Cars/sell-your-car/selling-your-car-faqs/">FAQs about Selling</a>

    </div>
</li>

<li>
    
    <a href="#" class="sub-menu-trigger">Find a Car</a>

    
    <div class="sub-menu">
        



        <a href="https://www.turners.co.nz/Cars/Used-Cars-for-Sale/" data-href="/Cars/Used-Cars-for-Sale/">Find a Car</a>

    </div>
</li>
        </ul>

        
        <ul class="right-menu">



<li>
    
    <a href="#" class="sub-menu-trigger">
            <span class="alt-menu-trigger icon-info-circle"></span>
            <span class="text">Services &amp; Information</span>
    </a>

    
    <div class="sub-menu">
        



        <a href="https://www.turners.co.nz/Company/About-Us/Overview/" title="Turners Group Overview" data-href="/Company/About-Us/Overview/">Turners Group Overview</a>
        <a href="https://www.turners.co.nz/Company/Terms-and-Conditions/terms-conditions/" title="Terms &amp; Conditions" data-href="/Company/Terms-and-Conditions/terms-conditions/">Terms &amp; Conditions</a>
        <a href="https://www.turners.co.nz/Cars/how-to-buy/Buyer-and-Seller-Fees/" title="Cars Buyers &amp; Sellers Fees" data-href="/Cars/how-to-buy/Buyer-and-Seller-Fees/">Cars Buyers &amp; Sellers Fees</a>
        <a href="https://www.turners.co.nz/Cars/how-to-buy/Shipping-Costs/" title="Cars Shipping Costs" data-href="/Cars/how-to-buy/Shipping-Costs/">Cars Shipping Costs</a>
        <a href="https://www.turners.co.nz/Finance/car--personal-finance/finance-faqs/" title="Finance FAQs" data-href="/Finance/car--personal-finance/finance-faqs/">Finance FAQs</a>
        <a href="https://www.turners.co.nz/Consumer-Law-Information/" title="Consumer Guarantees Act" data-href="/Consumer-Law-Information/">Consumer Guarantees Act</a>
        <a href="https://www.turners.co.nz/Finance/motor-vehicle-insurance3/motor-vehicle-insurance-faqs/" data-href="/Finance/motor-vehicle-insurance3/motor-vehicle-insurance-faqs/">Motor Vehicle Insurance FAQs</a>
        <a href="https://www.turners.co.nz/Finance/mechanical-breakdown-insurance/Mechanical-Breakdown-Insurance-FAQs/" data-href="/Finance/mechanical-breakdown-insurance/Mechanical-Breakdown-Insurance-FAQs/">Mechanical Breakdown Insurance FAQs</a>

    </div>
</li>
        </ul>

    </div>
</nav>
{/* <!--   End: Large Screen Main Menu   --> */}
    </header>
    <section>
    <div class="clear"></div>

<table border="0">
<tbody>
<tr>
<td>&nbsp;</td>
<td>
<h1>There’s two main types of car insurance</h1>
<ul>
<li>Mechanical Breakdown Insurance (MBI): in case things break on your car</li>
<li><a href="#MVI">Motor Vehicle Insurance (MVI): in case of accident, fire, theft and 3rd Party insurance</a></li>
</ul>
<h2>Mechanical Breakdown Insurance covers the cost of repairing your car if you have mechanical or electrical failure.</h2>
<p>Cover includes:</p>
<ul>
<li>Comprehensive cover for mechanical and electrical breakdown</li>
<li>Parts &amp; labour</li>
<li>AA Roadservice &amp; 24/7 breakdown assistance</li>
<li>Vehicle recovery and towing</li>
<li>Accommodation &amp; rental car costs for out of town breakdowns</li>
<li>Generous claim limits that are set when you purchase your policy</li>
</ul>
<p><strong>Get a quick quote today, call&nbsp;0800 TURNERS (<a href="tel:0800887637">0800 887 637</a>) or email us at&nbsp;<a href="mailto:contact@turners.co.nz">contact@turners.co.nz</a></strong></p>
<h2><strong>Protect yourself against unexpected costs.</strong></h2>
<p>If you own or buy a second hand car, make sure you’re covered for unforeseen and sudden mechanical and electrical breakdowns.</p>
<h2><strong><img alt="" src='carimage.jpg' height="354" width="620" /></strong></h2>


<p>&nbsp;</p>
<p>Mechanical Breakdown Insurance may be included in your Turners Finance loan. And remember, you can get Mechanical Breakdown Insurance for any vehicle, even if you didn’t buy it at Turners (subject to underwriting criteria).</p>
<p>Cover is available for&nbsp;different types and categories of vehicles.</p>
<p>&nbsp;</p>
<p><a class="button blue-button" href="Mechanical-Breakdown-Insurance-FAQs/index.html">View Mechanical Breakdown Insurance FAQs</a></p>
<p>To view the policy document,&nbsp;<a href="https://www.turners.co.nz/Finance/insurance-policies/">click here.</a></p>
<p><strong>If you already have mechanical breakdown insurance</strong><br />Phone <a href="tel:0800267873">0800 267 873</a>&nbsp;to get AA Roadservice if your car has broken down, you’d like support with your policy or&nbsp;<a href="Mechanical-Breakdown-Insurance-FAQs/index.html">information on making a claim.</a></p>
<p>Please note: pre-existing faults are not covered by the policy.&nbsp;Please refer to the policy wording for full policy terms and conditions.</p>
<p>*Turners Mechanical Breakdown Insurance is underwritten by&nbsp;<a href="https://www.dplinsurance.co.nz/" target="_blank">DPL Insurance.</a></p>
</td>
<td>&nbsp;</td>
</tr>
</tbody>
</table>
<p>&nbsp;</p>
<table border="0">
<tbody>
<tr>
<td>&nbsp;</td>
<td>
<h2><img alt="" src="../../../content.tgstatic.co.nz/webassets/globalassets/campaign-banners--artwork/2019/mbi_mob.jpg" height="283" width="766" /></h2>
<h2>Get Car Insurance from the car experts. &nbsp;It’s quick, easy&nbsp;and affordable.<a id="MVI"></a></h2>
<p>We’ve got you covered from comprehensive, third party&nbsp;fire &amp; theft,&nbsp;to third party property damage.</p>
<p>Benefits include:</p>
<ul>
<li>Nil excess for windscreen repairs</li>
<li>Trailer cover</li>
<li>Replacement vehicle cover</li>
<li>Keys &amp; locks</li>
<li>Emergency travel, accommodation &amp; repairs</li>
<li>Towing &amp; storage</li>
<li>Optional AA Roadside Assistance cover</li>
</ul>
<p><span>Get a quick quote today, call&nbsp;0800 TURNERS (<a href="tel:0800887637">0800 887 637</a>) or email us at&nbsp;<a href="mailto:contact@turners.co.nz">contact@turners.co.nz</a></span></p>
<p>We've got several different Insurance products available, and will offer you the best product for your needs.</p>
<p>You can purchase car insurance for any vehicle you own, even if you didn’t buy it at Turners (subject to underwriting criteria).</p>
<p><a class="blue-button" href="https://www.turners.co.nz/Finance/motor-vehicle-insurance/motor-vehicle-insurance-faqs/">View Car Insurance FAQs</a></p>
<p>To view the policy document,&nbsp;<a href="https://www.turners.co.nz/Finance/insurance-policies/">click here.</a></p>
<p><span>If you already have motor vehicle insurance</span><br />Phone&nbsp;<a href="tel:0800674678">0800 674 678</a>&nbsp;to get AA Roadservice &nbsp;if you’ve had an accident, you’d like support with your policy or&nbsp;<a href="https://www.turners.co.nz/Finance/motor-vehicle-insurance3/motor-vehicle-insurance-faqs/">information on making a claim.</a></p>
<p>If you can't find the information you are looking for, call&nbsp;0800 TURNERS (<a href="tel:0800887637">0800 887 637</a>) or email us at&nbsp;<a href="mailto:contact@turners.co.nz">contact@turners.co.nz</a>&nbsp;and we'll be happy to help.</p>
</td>
<td>&nbsp;</td>
</tr>
</tbody>
</table>
</section>

{/* <!--   Start: Footer    --> */}
<footer>

    {/* <!--   Start: Footer > Menu  --> */}
    <div class="footer-menu-container">
        <div class="content-max-width">

                    <div class="footer-menu">
                        <h2>Cars</h2>

                            <ul>
                                    <li><a href="https://www.turners.co.nz/Cars/how-to-buy/" title="How to Buy">How to Buy</a></li>
                                    <li><a href="https://www.turners.co.nz/Cars/sell-your-car/" title="Sell Your Car">Sell Your Car</a></li>
                                    <li><a href="https://www.turners.co.nz/Finance/" title="Finance &amp; Insurance">Finance &amp; Insurance</a></li>
                                    <li><a href="https://www.turners.co.nz/Cars/Auctions/" title="Auctions &amp; Events">Auctions &amp; Events</a></li>
                                    <li><a href="https://www.turners.co.nz/Cars/how-to-buy/Buyer-and-Seller-Fees/" title="Buyer &amp; Seller Fees">Buyer &amp; Seller Fees</a></li>
                                    <li><a href="https://www.turners.co.nz/Vehicle-Sale-Price-History/" title="Vehicle Sale Price History Tool">Vehicle Sale Price History Tool</a></li>
                                    <li><a href="https://www.turners.co.nz/Cars/how-to-buy/Shipping-Costs/" title="Shipping Costs">Shipping Costs</a></li>
                            </ul>
                    </div>
                    <div class="footer-menu">
                        <h2>Turners Finance</h2>

                            <ul>
                                    <li><a href="https://www.turners.co.nz/Finance/" target="_top" title="Finance page">Finance Homepage</a></li>
                                    <li><a href="https://www.turners.co.nz/Finance/car--personal-finance/" title="Car &amp; Personal Finance">Car &amp; Personal Finance</a></li>
                                    <li><a href="https://www.turners.co.nz/Finance/" target="_top" title="Loan Calculator">Loan Calculator</a></li>
                                    <li><a href="https://www.turners.co.nz/Finance/motor-vehicle-insurance/" title="Finance page">Car Insurance</a></li>
                                    <li><a href="https://www.turners.co.nz/Finance/mechanical-breakdown-insurance/" title="Finance page">Mechanical Breakdown Insurance</a></li>
                                    <li><a href="https://www.turners.co.nz/Finance/General-Insurance/" title="General Insurances">General Insurances</a></li>
                                    <li><a href="https://www.turners.co.nz/Trucks-Machinery/Finance/">Trucks Finance</a></li>
                                    <li><a href="https://www.turners.co.nz/Finance/legal-information/" title="Financial Information">Financial Information</a></li>
                            </ul>
                    </div>
                    <div class="footer-menu">
                        <h2>Search For</h2>

                            <ul>
                                    <li><a href="https://www.turners.co.nz/Cars/Used-Cars-for-Sale/" target="_top" title="Search for Cars">Cars</a></li>
                                    <li><a href="https://www.turners.co.nz/Trucks-Machinery/Used-Trucks-and-Machinery-for-Sale/" target="_top" title="Search for Trucks &amp; Machinery">Trucks &amp; Machinery</a></li>
                                    <li><a href="https://www.turners.co.nz/Damaged-Vehicles/Damaged-Cars-for-Sale/" target="_top" title="Search for Damaged &amp; End of Life Cars">Damaged &amp; End of Life Cars</a></li>
                                    <li><a href="https://www.turners.co.nz/boats-marine/Used-Boats-for-Sale/" target="_top" title="Search for Boats and Marine">Boats &amp; Marine</a></li>
                                    <li><a href="https://www.turners.co.nz/motorcycles-scooters/Used-Motorbikes-for-Sale/" target="_top" title="Search for Motorcycles">Motorcycles &amp; Scooters</a></li>
                                    <li><a href="https://www.turners.co.nz/General-Goods/Search/" target="_top" title="Search for General Goods">General Goods</a></li>
                                    <li><a href="https://www.turners.co.nz/buses-caravans/Used-Caravans-and-Motorhomes-for-Sale/" target="_top" title="Search for Buses, Caravans &amp; Motorhomes">Buses, Caravans &amp; Motorhomes</a></li>
                                    <li><a href="https://www.turners.co.nz/Company/Auction-Schedule/" target="_top" title="Auction Schedule">Turners Auction Schedule</a></li>
                            </ul>
                    </div>
                    <div class="footer-menu">
                        <h2>About Us</h2>

                            <ul>
                                    <li><a href="https://www.turners.co.nz/Company/About-Us/Overview/">Overview</a></li>
                                    <li><a href="https://www.turners.co.nz/Company/Careers/turners-careers/">Turners Careers</a></li>
                                    <li><a href="https://www.turners.co.nz/Company/Terms-and-Conditions/" title="See out Terms &amp; Conditions">Terms and Conditions</a></li>
                                    <li><a href="https://www.turners.co.nz/Company/Terms-and-Conditions/Privacy-Policy/">Privacy Policy</a></li>
                                    <li><a href="https://www.turners.co.nz/Turners-Live/" title="Learn about Turners Live">Turners Live</a></li>
                                    <li><a href="https://www.turners.co.nz/the-good-oil/" title="The Good Oil Blog">The Good Oil Blog</a></li>
                                    <li><a href="https://www.turners.co.nz/Company/email-alerts/">Email Alerts</a></li>
                                    <li><a href="https://www.turners.co.nz/Company/Contact-Us/">Contact Us</a></li>
                            </ul>
                    </div>
            
        </div>
    </div>
    {/* <!--   End: Footer > Menu   -->
    <!--   Start: Bottom Bar  --> */}
    <div class="footer-bottom-bar">
        <div class="content-max-width">
            <div class="social-block">
                <a></a>
                <a href="https://www.turners.co.nz/Company/Branches/"><span class="icon-home"></span>Branch Details</a>
                <a href="http://www.facebook.com/turnersNZ"><span class="icon-facebook"></span>Facebook</a>
                <a href="https://www.turners.co.nz/Company/email-alerts/email-newsletters/"><span class="icon-envelope-o"></span>Newsletter</a>
                <a href="https://www.turners.co.nz/Company/email-alerts/email-alerts/"><span class="icon-envelope-o"></span>Email Alerts</a> 
                <a class="shielded-site-image"><img src="../../../content.tgstatic.co.nz/webassets/assets/images/shieldedSite/shielded-site-logo.png" alt="Women's Refuge Shield" id="shieldedSite"/></a>  
            </div>
            <div class="copyright">&copy; 2020 Turners</div>
        </div>
    </div>
    {/* <!--   End: Bottom Bar   --> */}

</footer>
{/* <!--   End: Footer    --> */}
    
    </div>
    
  )
 
}
export default App;




