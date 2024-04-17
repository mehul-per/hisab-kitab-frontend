<template>
  <div>
    <v-form class="fomC">
      <v-container>
        <v-row>
          <v-col cols="12" sm="2" md="3">
            <div class="allSec">
<form>
  <fieldset class="ml-2">
    <div class="mb-3 firstCal">
      <input type="text" class="firstIn" v-model="firstInValue">
      <input type="date" id="disabledTextInput"  class="form-control calFirst" placeholder="select">
    </div>
    <div class="twoDrop">
        <div class="mb-3">
          <select id="disabledSelect" class="form-select">
            <option>Select Day</option>
            <option>Sunday</option>
            <option>Monday</option>
            <option>Tuesday</option>
            <option>Wednesday</option>
            <option>Thursday</option>
            <option>Friday</option>
            <option>Saturday</option>
          </select>
        </div>
        <div class="mb-3">
          <select id="disabledSelect" class="form-select">
            <option>Select Day</option>
            <option>Day</option>
            <option>Night</option>
          </select>
        </div>
    </div>


      <div class="mb-3">
        <select id="disabledSelect" class="form-select colorName">
          <option>Select Color</option>
          <option>OM Color</option>
          <option>10 gm silver</option>
          <option>nagin color</option>
          <option>dulhan color</option>
        </select>
      </div>
      
      <div class="mb-3">
        <select id="disabledSelect" class="form-select colorName">
          <option>Select Akhadar of name</option>
          <option>Yogesh</option>
          <option>Mahesh</option>
          <option>Ashvin</option>
          <option>Mehul</option>
          <option>Manish Hari</option>
          <option>Rakesh Press</option>
          <option>Dharmesh Press</option>
          <option>Meghal Rajesh</option>
          <option>Pankaj Shanti</option>
          <option>Rajabhai</option>
        </select>
      </div>
      


    <div class="firstRoD  firstRoD mb-3">
      <input type="text" class="form-control" id="weight1" placeholder="Enter Weight 1" v-model="weight1" @input="calculateSubtotal">
      <input type="date" id="disabledTextInput"  class="form-control calFirst" placeholder="select">
    </div>
    <div class="firstRoD  firstRoD mb-3">
      <input type="text" class="form-control" id="weight2" placeholder="Enter Weight 2"  v-model="weight2" @input="calculateSubtotal">
      <input type="date" id="disabledTextInput"  class="form-control calFirst" placeholder="select">
    </div>
    <div class="firstRoD  firstRoD mb-3">
      <input type="text" class="form-control" id="weight3" style="width: 47%;" placeholder="Enter Weight 3"  v-model="weight3" @input="calculateSubtotal">
    </div>


  <div class="firstRoD allWeightTotal  firstRoD mb-3">
      <input type="text" class="form-control" id="grandTotal" style="width: 47%;" placeholder="Sub total"  v-model="subtotal" readonly>
  </div>







  
  <!-- center total field -->
  <div class="firstRoD allGrandTotal  firstRoD mb-3">
    <input type="text" class="form-control" style="width: 47%;" placeholder="Grand total" v-model="grandTotal" readonly>
    <input type="text" class="form-control" style="width: 47%;" placeholder="vadh 1.3%" readonly v-model="vadhData" @input="calculateSubtotal">
  </div>
  
  <div class="firstRoD roundSet  firstRoD ">
    <select id="disabledSelect" class="form-select " style="width: 47%;">
          <option>Select Roundwala</option>
          <option>Kala</option>
          <option>Pravin</option>
          <option>Hashmukh</option>
          <option>Ashvin</option>
          <option>Pranjivan</option>
        </select>
    <input type="date" class="form-control" style="width: 47%;"  >
  </div>
</fieldset>


  <!-- second detail form -->
  <fieldset class="mt-9 ml-2">
    <div class="bothDiv">

      <div class="leftField">
        
        <div class="firstRoD  firstRoD mb-3">
          <input type="text" class="form-control setWidForSecondWe" placeholder="Enter Weight 1" v-model="weight4" @input="calculateSubtotal">
        </div>
        <div class="firstRoD  firstRoD mb-3">
          <input type="text" class="form-control setWidForSecondWe" placeholder="Enter Weight 2" v-model="weight5" @input="calculateSubtotal">
        </div>
        <div class="firstRoD  firstRoD mb-3">
          <input type="text" class="form-control setWidForSecondWe" placeholder="Enter Weight 3" v-model="weight6" @input="calculateSubtotal">
        </div>


        <div class="firstRoD  firstRoD mb-3">
          <input type="text" class="form-control setWidForSecondWe" placeholder="Sub total" v-model="subtotal1" readonly>
        </div>

        
      
      </div>


    <div class="rightField">
      <button type="submit" class="btn btn-primary" onclick="addRow()">Add</button>
      <div class="twoBtn">
        <button type="submit" class="btn btn-primary">Previous</button>
        <button type="submit" class="btn btn-primary">Next</button>
      </div>
      <button type="submit" class="btn btn-primary">Update</button>
    </div>

    </div>


    

    <div class="firstRoD  firstRoD mb-3">
      <input type="text" class="form-control " style="width: 30%;" placeholder="kapan" v-model="kapan" @input="calculateSubtotal">
    </div>

    <div class="firstRoD  firstRoD mb-3">
          <input type="text" class="form-control" style="width: 100%;" placeholder="Note">
    </div>
  </fieldset>
</form>
</div>
          </v-col>
        </v-row>
      </v-container>
    </v-form>

    <table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">No</th>
      <th scope="col">Date</th>
      <th scope="col">Day</th>
      <th scope="col">Color</th>
      <th scope="col">Akhadar name</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colspan="2">Larry the Bird</td>
      <td>@twitter</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>





  </div>
</template>

<script>
import userService from '../services/user.service';

export default {
  name: "Home",
  props: ['isDark'],
  data() {
    return {
      menu: false,
      date: null,
      weight1: '',
      weight2: '',
      weight3: '',
      weight4: '',
      weight5: '',
      weight6: '',
      subtotal1: 0,
      firstInValue: '1',
      kapan: '',
      vadhData: ''
    };
  },
  methods: {
    clearNonNumericInput() {
      if (isNaN(parseFloat(this.weight1))) this.weight1 = '';
      if (isNaN(parseFloat(this.weight2))) this.weight2 = '';
      if (isNaN(parseFloat(this.weight3))) this.weight3 = '';

      if (isNaN(parseFloat(this.weight4))) this.weight4 = '';
      if (isNaN(parseFloat(this.weight5))) this.weight5 = '';
      if (isNaN(parseFloat(this.weight6))) this.weight6 = '';
    },
    calculateSubtotal() {
        this.clearNonNumericInput();
        const weight1 = parseFloat(this.weight1 || 0);
        const weight2 = parseFloat(this.weight2 || 0);
        const weight3 = parseFloat(this.weight3 || 0);
        this.subtotal = (weight1 + weight2 + weight3).toFixed(3);

        
        const weight4 = parseFloat(this.weight4 || 0);
        const weight5 = parseFloat(this.weight5 || 0);
        const weight6 = parseFloat(this.weight6 || 0);
        this.subtotal1 = (weight4 + weight5 + weight6).toFixed(3);


        const grandTotal = this.subtotal - this.subtotal1
        this.grandTotal = grandTotal

        const kapanValue = parseFloat(this.kapan || 0);
        this.grandTotal -= kapanValue.toFixed(3);

        // Add 1.3% to the grand total
        const vadhPercentage = 1.25 / 100;
        const vadhAmount = grandTotal * vadhPercentage;
        const grandTotalWithVadh = grandTotal + vadhAmount;
        this.vadhData = grandTotalWithVadh;
    },




    async getHisab() {
           try {
             const response = await userService.getAllHisab();
             console.log("Success", response)
             if(response.status == 200){
               this.get_hisab = response.data;
             }else{
              console.error("Something went wrong")
             }
           } catch (error) {
            console.error("Something went wrong")

           }
            
        },
  },
  
  mounted() {
    this.getHisab();
  }

  
};
</script>

<style scoped>
@import url('./homeStyle.css');
</style>
