<template>
  <div id="questionboard">

    <span v-if="!toEssays">
      <div id="infoNav">
        <div>
        <h2><strong>Total Scholarships:</strong> {{totalAppliedScholarships}}</h2>
        </div>

        <div>
        <h2><strong>Total Cash:</strong> ${{totalCash}}</h2>
        </div>
        <button class="nextButton"
        v-bind:class="{next: anySelected, skip: !anySelected}" v-on:click="essaySwitch"><strong>{{nextButtonText}}</strong></button>
      </div>

      <h1>What essay topic interests you?</h1>
      <p class="gray">Pick your favorite essay topics to start formulating your Master Application.</p>
      <div class="marginTop">
        <div v-for="question in questions">
            <Question 
            v-on:click.native="select($event, question)"
            v-bind:questionTitle= question.questionTitle
            v-bind:cash= question.cash
            v-bind:appliedScholarships = question.appliedScholarships
            v-bind:isSelected = question.isSelected
            >
            </Question>
        </div>
      </div>
    </span>

    <span v-if="toEssays && anySelected">
      <div id="infoNav">
        <div>
        <h2><strong>Total Scholarships:</strong> {{totalAppliedScholarships}}</h2>
        </div>

        <div>
        <h2><strong>Total Cash:</strong> ${{totalCash}}</h2>
        </div>
        <button class="nextButton"
        v-bind:class="{next: anySelected, skip: !anySelected}" v-on:click="essaySwitch"><strong>{{nextButtonText}}</strong></button>
   
      </div>

      <h1>Formulate Responses</h1>
      <p>Start typing your responses to these essay prompts to complete your master application. You can go back anytime to add or remove essay prompts.</p>
      <div v-for="question in questions">
        <span v-if="question.isSelected">
            <EssayQuestion 
            v-bind:questionTitle= question.questionTitle
            v-bind:isSelected = question.isSelected
            >
            </EssayQuestion>
        </span>
      </div>

    </span>

  </div>
</template>

<script>
import Question from './Question'
import Essays from './Essays'
import EssayQuestion from './EssayQuestion'


export default {
  name: 'App',
  components: {
    Question,
    Essays,
    EssayQuestion
  },

  data() {
    return {
      toEssays: false,
      totalCash: 0,
      totalAppliedScholarships: 0,
      nextButtonText: 'Skip for now',
      anySelected: false,
      questions: [
        {
          questionTitle: 'What do you want to accomplish throughout college and how are you going to go about these accomplishments? What challenges will you have to overcome?',
          cash: 10000,
          appliedScholarships: 10,
          isSelected: false
        },
        {
          questionTitle: 'Describe your career goals. What are the top 3 things you want to achieve during your life?',
          cash: 20000,
          appliedScholarships: 25,
          isSelected: false
        },
        {
          questionTitle: 'Give some examples of community service decisions you’ve made throughout high school and/or college. How did they make you feel?',
          cash: 16000,
          appliedScholarships: 13,
          isSelected: false
        },
        {
          questionTitle: 'How will winning a scholarship allow you to reach your academic and/or life goals? Explain what it would mean to you if you won scholarship money',
          cash: 50000,
          appliedScholarships: 30,
          isSelected: false
        },
        {
          questionTitle: 'How do you feel about distracted driving? Tell us how you feel we can improve safety on the road.',
          cash: 10000,
          appliedScholarships: 6,
          isSelected: false
        }
      ]
      }
    },
    methods: {
      select: function(event, question) {
        event.preventDefault();
        question.isSelected = !question.isSelected;
        if (question.isSelected) {
          this.totalCash = this.totalCash + question.cash;
          this.totalAppliedScholarships = this.totalAppliedScholarships + question.appliedScholarships;
        } else {
          this.totalCash = this.totalCash - question.cash;
          this.totalAppliedScholarships = this.totalAppliedScholarships - question.appliedScholarships;
        }
        if ( (this.totalCash > 0 || this.totalAppliedScholarships > 0) && this.anySelected == false) {
          this.anySelected = true;
          this.updateButton();
        } else if (this.totalCash == 0 || this.totalAppliedScholarships == 0) {
          this.anySelected = false;
          this.updateButton();
        }
      },
      updateButton: function() {
        if (this.anySelected) {
          this.nextButtonText = "Next";
        } else {
          this.nextButtonText = "Skip for now"
        }
      },
      essaySwitch: function() {
        this.toEssays = !this.toEssays;
        anySelected = false;
        updateButton();
      }
    }
}
</script>

<style scoped>

#infoNav {
  width: 600px;
  height: 4em;
  background-color: #273343;
  position: fixed;
  top: 0;
  overflow:hidden;
  border-radius: 0px 0px 10px 10px;
  -moz-border-radius: 0px 0px 10px 10px;
  -webkit-border-radius: 0px 0px 10px 10px;
  border: 0px solid #000000;

}

p {
  line-height: 1.5em;
  color: #5b5b5b;
}

h1 {
  color: #343434;
}

#infoNav h2 {
  font-size: 0.8em;
  font-weight: 100;
  color: white;
  display: inline;
}

#infoNav div {
  display: inline-block;
  margin-top: 0.6em;
  margin-left: 4.2em;
  padding: 10px 20px 10px 20px;
}

#infoNav div h2 {
  color: white;
}

.next {
  color: white;
  background: #55a54e;
  margin-bottom: 200px;
}

.next:hover {
  background: #3f833a;
  text-decoration: none;
}

.skip {
  color: #ffffff;
  background: #273343;
}

.skip:hover {
  background: #1a232e;
  text-decoration: none;
}

#questionboard {
  width: 600px;
  position: relative;
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 7em;
  min-height: 64.5vh;
}

.nextButton {
  -webkit-border-radius: 19;
  -moz-border-radius: 19;
  border-radius: 19px;
  font-family: Arial;
  font-size: 0.8em;
  border: 0;
  padding: 10px 20px 10px 20px;
  text-decoration: none;
  float: right;
  margin-right: 2em;
  margin-top: 1em;
  transition:0.2s ease;-moz-transition:0.5s ease;-webkit-transition:0.5s ease;
}


.marginTop {
  padding-top: 1em;
}

</style>
