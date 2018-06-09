import { Component, OnInit, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {orderlistitem} from '../orderitem';

import 'select2';

declare var $:any;


@Component({
  selector: 'home-root',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  public locations: string[] = ["Abohar","Adampur","Addadakha","Agartala","Agra","Ahmedabad","Ahmednagar","Aizawl","Ajmer","Ajnala","Alamuru","Alappuzha","Aligarh","Allahabad","Aluva","Alwar","Ambala","Ambala Cantonment","Ambikapur","Amravati","Amreli","Amritsar","Amtala","Anand","Anantapur","Angul","Ankleshwar","Apra","Arambagh","Arani","Asansol","Athni","Aurangabad","Azamgarh","Baddi","Bagalkot","Baghapurana","Bagnan","Bahadurgarh","Baharampur","Balasore","Ballabhgarh","Balurghat","Baner","Banga","Bangalore","Bankura","Banswara","Bapatla","Baramati","Barbil","Bardoli","Bareilly","Bargarh","Barnala","Barrackpore","Baruipur","Basirhat","Batala","Bathinda","Bazpur","Begowal","Begusarai","Belgaum","Bellary","Berhampurganjam","Bettiah","Bhadrak","Bhagalpur","Bhagsunag","Bharuch","Bhavnagar","Bhilai","Bhilwara","Bhiwadi","Bhiwandi","Bhiwani","Bhopal","Bhubaneswar","Bhunter","Bidar","Bijapur","Bikaner","Bilaspur","Bir","Bodakdev","Bokaro","Bolangir","Bolpur","Bongaigaon","Bulandshahr","Bundi","Burdwan","Chakan","Chandernagore","Chandigarh","Chandrapur","Chennai","Chhindwara","Chickmagalur","Chillakallu","Chinnamiram","Chiplun","Chittoor","Churu","Coimbatore","Contai","Cuddalore","Cuttack","Dahod","Dalhousie","Daman","Dankuni","Darbhanga","Darjeeling","Dasuya","Davangere","Deesa","deharadun","Dehradun","Delhi","Deoghar","Derabassi","Dewas","Dhamtari","Dhanbad","Dharmshala","Dharwad","Dhenkanal","Dhule","Dibrugarh","Dilsukh Nagar","Dimapur","Dindigul","Dindori","Durg","Durgapur","Edarapalli","Ernakulam","Erode","Faizabad","Faridabad","Faridkot","Farrukhabad","Fatehabad","Fatehpur","Ferozepur","Firozabad","Fulia","Gadag","Gandhidham","Gandhinagar","Gangawati","Gangtok","Gardhiwal","Garhshankar","Gawli Palasia","Gaya","Ghaziabad","Giridih","Godhra","Gokak","Gorakhpur","Greater Noida","Gudivada","Gulbarga","Guna","Guntur","Gurdaspur","Gurugram / Gurgaon","Guwahati","Gwalior","Habra","Haldia","Hanmakonda","Hanumangarh","Haridwar","Hassan","Hazaribagh","Himatnagar","Hissar","Hooghly","Hoshangabad","Hoshiarpur","Hospet","Hosur","Howrah","Hubli","Hyderabad","Ichalkaranji","Ilanji","Imphal","Indore","Islampur Branch","Itanagar","Itarsi","Jabalpur","Jagraon","Jaipur","Jajpur Road","jalandar","Jalandhar","Jalgaon","Jalna","Jalpaiguri","Jamkhandi","Jammu","Jamnagar","Jamshedpur","Jangareddigudem","Jaunpur","Jeypore","Jhansi","Jharsuguda","Jhunjhunu","Jodhpur","Jorhat","Junagadh","Kadapa","Kadayanallur","Kaithal","Kakinada","Kalimpong","Kalna","Kalol","Kalyan","Kalyani","Kancheepuram","Kanhangad","Kannur","Kanpur","Kanyakumari","Kapurthala","Karaikudi","Karimnagar","Karnal","Karur","Karwar","Kasargod","Kashipur","Kasia","Katni","Katwa","Keonjhar","Khammam","Khandwa","Khanna","Kharagpur","Koch Bihar","Kochi","Kohima","Kolhapur","Kolkata","Kollam","Korba","Kota","Kotkapura","Kottayam","Kozhikode","Krishnanagar","Kukatpally","Kumbakonam","Kurnool","Kurukshetra","Lakhimpur Kheri","Lambra","Lasalgaon","Latur","Leh","Lucknow","Ludhiana","Machilipatnam","Madgaon","Madhapar","Madurai","Mahasamund","Mahestala","Mahilpur","Malappuram","Malda","Malerkotla","Malout","Manali","Mandsaur","Mangalore","Mansa","Margao","Marmagao","Mathura","Mau","Mayiladuthurai","McLeod Ganj","Meerut","Mehsana","Memari","Midnapur","Miller Ganj","Miryalguda","Mirzapur","Moga","Mohali","Moradabad","Morbi","Mumbai","Mundra","Mussoorie","Muzaffarnagar","Muzaffarpur","Mysore","Nabha","Nadiad","Nagaon","Nagapattinam","Nagercoil","Nagpur","Nakodar","Nanded","Nandyal","Narasaraopet","Nashik","Navi Mumbai","Navsari","Nawanshahar","Neemuch","Nellore","Nizamabad","Noida","Nurpurbedi","Ongole","Ootacamund","Padampur","Paidiparru","Pala","Palai","Palakkad","Palanpur","Palasia","Palwal","Panchkula","Pandri","Panihati","Panipat","Panji","Panjim","Panvel","Patan","Patancheru","Pathanamthitta","Pathankot","Patiala","Patna","Patti","Pehowa","peravallur","Phagwara","Phillaur","Phullanwal","Pilibhit","Pimpalgaon","Pollachi","Pondicherry","Poolapalle","Porbandar","Port Blair","Proddatur","Pudukottai","Punalur","Pune","Purasawalkam","Puri","Purnia","Puruliya","Puttaparty","Rai Bareli","Raichur","Raiganj","Raigarh","Raipur","Rajahmundry","Rajapalayam","Rajarhat","Rajkot","Rajnandgaon","Rajpipla","Rajpura","Ramgarh","Ranchi","Rangpo","Ratlam","Ratnagiri","Rayagada","Rayya","Razole","Rewa","Rewari","Rishikesh","Rishra","Rohtak","Roorkee","Rourkela","Rudrapur","Rupnagar","Sadaura","Sagar","Saharanpur","Saidapur","Salem","Samana","Sambalpur","Sanganer","Sangli","Sangrur","Satara","Sathyamangalam","Satna","Secunderabad","Sehore","Serampore","Shillong","Shimla","Shimoga","Shirdi","Sidhi","Silchar","Siliguri","Sindhnur","Singur","Sirsa","Sitapur","Sivakasi","Solan","Solapur","Sonipat","Sri Ganganagar","Srikakulam","Sudhar","Sujangarh","Sultanpur","Sunder Nagar","Surat","Surendranagar","Suri","Tagore Nagar","Talli haldwani","talli haldwani","Tamluk","Tanda","Taramani","Tarn Taran","Tasgaon","Tenali","Tezpur","Thalassery","Thane","Thanjavur","Theni","Thiruvalla","Thiruvalur","Thiruvananthapuram","Thiruvarur","Thodupuzha","Threeke","Thrissur","Tinsukia","Tiruchengode","Tiruchirapalli","Tirunelveli","Tirupur","Tirur","Trichur","Tumkur","Tura","Tuticorin","Udaipur","Udupi","Ujjain","Ulhasnagar","Una","Urapar","Vadakara","Vadodara","vadodora","vadodra","Vallabh Vidyanagar","Valsad","Vapi","Varanasi","Varkala","Vasco","Vastrapur","Vellore","Veraval","Verka","Vidisha","Vidyanagar","Vijayawada","Villupuram","Virugambakkam","Visakhapatnam","vishakapatnam","Visnagar","vizag","Vizianagaram","waidhan","Warangal","Yamunanagar","Yavatmal"];
  public currencys: string[] = ["US Dollar","Euro","British Pound","Australian Dollar","Canadian Dollar","Singapore Dollar","New Zealand Dollar","Hong Kong Dollar","UAE Dirham","Saudi Riyal","Swiss Franc","Japanese Yen","Swedish Krona","Thai Baht","Malaysian Ringgits","Chinese Yuan","South African Rand","Omani","Rial","Bahraini Dinar","Kuwaiti Dinar","Norwegian Krone","Danish Krone","Indonesian Rupiah","Sri Lankan Rupee","Korean Won","Russian Ruble","Philippine Peso","Vietnam Dong","Mauritius Rupee","Bangladesh Taka"];
  public products: string[] = ["FOREX CARD ","CURRENCY NOTES","TRAVELLERS CHEQUE"]


  id = 1;
  orderitem = new orderlistitem(0,"","","",0,0);
  ORDERITEM = [ ] 
  rate : number = 67.25;
  famount ;
  inramount ;
  error = false;
  showTable = false;
  totalAmountofCart = 0;
  
  

   constructor() { }
    ngOnInit() {
    
    }

    // allowing only 11 digits typed in the forex and inr input  on keypress
    validate(e){
        if(e.length < 10){
        return true
        }else{
        return false
        }
    }
     // set the forex ammount using ng model
    setforex(e){
        var fmoney = this.inramount /this.rate
        this.famount = fmoney.toFixed(2);
    }
   // set the inr ammount using ng model
    setinr(e){ 
          var inrmoney =   this.famount * this.rate;
          this.inramount = inrmoney.toFixed(2);
    }

   // add product method
    addProduct (){
        //intialise the variables
        var currentlocation;
        var currentcurrency;
        var currentproduct;
        var currentforex;
        var currentINR;
        // get location and validate
        if($("#listLocation").select2("val") > 0){
            currentlocation = this.locations[$("#listLocation").select2("val")-1]
            this.error  = false;
        }else{
            this.error  = true;
        }
        // get currency and validate
         if($("#listCurrency").select2("val") > 0){
            currentcurrency = this.currencys[$("#listCurrency").select2("val")-1]
            this.error  = false;
        }else{
            this.error  = true;
        }
        // get product and validate
         if($("#listProduct").select2("val") > 0){
            currentproduct = this.products[$("#listProduct").select2("val")-1]
            this.error  = false;
        }else{
            this.error  = true;
        }
        // get forex amount and validate
        if(this.famount>0){
            currentforex = this.famount
            currentINR = this.inramount
            this.error  = false;
        }else{
            this.error  = true;
        }
        // reset the template
        $("#listLocation").val('').trigger('change')
        $("#listCurrency").val('').trigger('change')
        $("#listProduct").val('').trigger('change')
        this.famount = null;
        this.inramount =null;
         // create table and display
        if(!this.error){ 
            this.showTable =true;
            this.orderitem.location = currentlocation
            this.orderitem.Currency = currentcurrency
            this.orderitem.Product = currentproduct
            this.orderitem.ForexAmount =currentforex
            this.orderitem.INRAmount =currentINR
            this.addorderitem();
            this.calculateTotalAmount()
         }
    }
    // adding an new record to the array
       addorderitem(){
        this.id += 1;
        const orderEntry = new orderlistitem(this.id,this.orderitem.location, this.orderitem.Currency, this.orderitem.Product, this.orderitem.ForexAmount, this.orderitem.INRAmount);
        this.ORDERITEM.push(orderEntry);
        this.resetorderitem();
       }
    // deleting new item to array
       deleteorderitem(id: number){
        for (let i = this.ORDERITEM.length - 1; i >= 0; i--) {
            if (this.ORDERITEM[i].id === id) {
              this.ORDERITEM.splice(i, 1);
            }
          }
         if(this.ORDERITEM.length === 0){
             this.showTable=false;
         }
         this.calculateTotalAmount();
       }
    // resetting this object to accept new one 
       resetorderitem() {
        this.orderitem.Currency = '';
        this.orderitem.Product = '';
        this.orderitem.ForexAmount = null;
        this.orderitem.INRAmount = null;
      }
      calculateTotalAmount(){
        this.totalAmountofCart = 0;
        for(let i = this.ORDERITEM.length-1; i >= 0; i--){
           
                var am = parseFloat(this.ORDERITEM[i].INRAmount);
            this.totalAmountofCart = am + this.totalAmountofCart;
    
        }
        console.log(this.totalAmountofCart);
      }
}
