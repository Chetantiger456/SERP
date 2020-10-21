
   // Create the function topScorer(marks) that returns the name of the top-scored person.
   // If marks is empty, it should return null.
   // Use Object.entries and destructuring to iterate over key/value pairs.
   
   let emptymarks = {}
 
   let marks = {
       "Ajay": 78,
       "Vijay": 92,
       "Sanjay": 67,
       "Dananjay": 96
       };
   
       let resultValue = 0, resultKey = ''
   
     topScorer = (marks1) => {
       if(Object.keys(marks1).length == 0){
           return null
       }
   
       for(let [name, marksValue] of Object.entries(marks1)){
           console.log(`${name}: ${marksValue}`)
           if(marksValue > resultValue){
               resultValue = marksValue
               resultKey = name
           }
       }
           return resultKey
   }    
   
   
   console.log(topScorer(emptymarks))
   console.log(topScorer(marks))