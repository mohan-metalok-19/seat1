  const patternData = [
    {pattern:'noPattern',label: 'No PT', imageName: 'no-pattern', no:'1'},
    {pattern:'pattern1', label: 'PT 1',  imageName: 'pt-1', no:'2' },
    {pattern:'pattern2', label: 'PT 2',  imageName: 'pt-2', no:'3'},
    {pattern:'pattern3', label: 'PT 3',  imageName: 'pt-3', no:'4' },
    {pattern:'pattern4', label: 'PT 4',  imageName: 'pt-4', no:'5' },
    {pattern:'pattern5', label: 'PT 5',  imageName: 'pt-5', no:'6' },
    {pattern:'pattern6', label: 'PT 6',  imageName: 'pt-6', no:'7' },
    {pattern:'pattern7', label: 'PT 7',  imageName: 'pt-7', no:'8' },
  ];
 

  function genPtCol(leather, object,object2,object3, con) {
  const colorDiv = document.createElement('div');
  colorDiv.className = 'color-div';

  const numRows = 2;
  const imagesPerRow = 4;

  for (let row = 1; row <= numRows; row++) {
    const rowDiv = document.createElement('div');
    rowDiv.className = 'color-1 para-text';
    colorDiv.appendChild(rowDiv);

    for (let i = 1; i <= imagesPerRow; i++) {
      const colorNumber = (row - 1) * imagesPerRow + i;
      const divElement = document.createElement('div');
      divElement.className = 'ch-color';
      const imageElement = document.createElement('img');
      imageElement.alt = 'color';
      const pElement = document.createElement('p');

      if(leather == 'pt_ch') { 
        divElement.addEventListener('click', function() { 
          changePattern(1, seat[object], seat[object2], seat[object3], config.pattern[patternData[colorNumber-1].pattern], 'ch', 1, 1, 0, 0);  
        });
        imageElement.src = `./images/patterns/${patternData[colorNumber-1].imageName}.png`; 
        pElement.textContent = `${patternData[colorNumber-1].label}`; 
      } 
      else if (leather == 'pt_fe')  { 
        divElement.addEventListener('click', function() { 
          changePattern(1, seat[object], seat[object2], seat[object3], config.pattern[patternData[colorNumber-1].pattern], 'fe', 1, 1, 0, 0);  
        // console.log('here the pattern of fether', patternData[colorNumber-1].pattern)
        });
        imageElement.src = `./images/patterns/${patternData[colorNumber-1].imageName}.png`; 
        pElement.textContent = `${patternData[colorNumber-1].label}`;
      }
      else if (leather == 'pt_al')  { 
        divElement.addEventListener('click', function() { 
          changePattern(1, seat[object], seat[object2], seat[object3], config.pattern[patternData[colorNumber-1].pattern], 'al', 1, 1, 0, 0);  
          console.log('here the pattern of alcantra', patternData)
        });
        imageElement.src = `./images/patterns/${patternData[colorNumber-1].imageName}.png`; 
        pElement.textContent = `${patternData[colorNumber-1].label}`; 
      }
      else if (leather == 'pt_pg')  { 
        divElement.addEventListener('click', function() { 
          changePattern(1, seat[object], seat[object2], seat[object3], config.pattern[patternData[colorNumber-1].pattern], 'al', 1, 1, 0, 0);  
          console.log('here the pattern of alcantra', patternData)
        });
        imageElement.src = `./images/patterns/${patternData[colorNumber-1].imageName}.png`; 
        pElement.textContent = `${patternData[colorNumber-1].label}`; 
      }
      else if (leather == 'pt_pn')  { 
        divElement.addEventListener('click', function() { 
          changePattern(1, seat[object], seat[object2], seat[object3], config.pattern[patternData[colorNumber-1].pattern], 'al', 1, 1, 0, 0);  
          console.log('here the pattern of alcantra', patternData)
        });
        imageElement.src = `./images/patterns/${patternData[colorNumber-1].imageName}.png`; 
        pElement.textContent = `${patternData[colorNumber-1].label}`; 
      }
      else {

      }
      divElement.appendChild(imageElement);
      divElement.appendChild(pElement);
      rowDiv.appendChild(divElement);
    }
  }

  let container= document.getElementById(con);
  container.appendChild(colorDiv);

}

genPtCol('pt_ch', 'PATTERN1MAT','STITCHPATTERN1MAT','PATTERNDOTS1MAT','pt_ch-one-pattern-container');  
genPtCol('pt_fe', 'PATTERN1MAT','STITCHPATTERN1MAT','PATTERNDOTS1MAT','pt_fe-one-pattern-container');  
genPtCol('pt_al', 'PATTERN1MAT','STITCHPATTERN1MAT','PATTERNDOTS1MAT','pt_al-one-pattern-container');   
genPtCol('pt_pg', 'PATTERN1MAT','STITCHPATTERN1MAT','PATTERNDOTS1MAT','pt_pg-one-pattern-container');   
genPtCol('pt_pn', 'PATTERN1MAT','STITCHPATTERN1MAT','PATTERNDOTS1MAT','pt_pn-one-pattern-container'); 

genPtCol('pt_ch', 'PATTERN2MAT','STITCHPATTERN2MAT','PATTERNDOTS2MAT','pt_ch-two-pattern-container');  
genPtCol('pt_fe', 'PATTERN2MAT','STITCHPATTERN2MAT','PATTERNDOTS2MAT','pt_fe-two-pattern-container');  
genPtCol('pt_al', 'PATTERN2MAT','STITCHPATTERN2MAT','PATTERNDOTS2MAT','pt_al-two-pattern-container');   
genPtCol('pt_pg', 'PATTERN2MAT','STITCHPATTERN2MAT','PATTERNDOTS2MAT','pt_pg-two-pattern-container');   
genPtCol('pt_pn', 'PATTERN2MAT','STITCHPATTERN2MAT','PATTERNDOTS2MAT','pt_pn-two-pattern-container'); 

genPtCol('pt_ch', 'PATTERN3MAT','STITCHPATTERN3MAT','PATTERNDOTS3MAT','pt_ch-three-pattern-container');  
genPtCol('pt_fe', 'PATTERN3MAT','STITCHPATTERN3MAT','PATTERNDOTS3MAT','pt_fe-three-pattern-container');  
genPtCol('pt_al', 'PATTERN3MAT','STITCHPATTERN3MAT','PATTERNDOTS3MAT','pt_al-three-pattern-container');   
genPtCol('pt_pg', 'PATTERN3MAT','STITCHPATTERN3MAT','PATTERNDOTS3MAT','pt_pg-three-pattern-container');   
genPtCol('pt_pn', 'PATTERN3MAT','STITCHPATTERN3MAT','PATTERNDOTS3MAT','pt_pn-three-pattern-container');  

genPtCol('pt_ch', 'PATTERN4MAT','STITCHPATTERN4MAT','PATTERNDOTS4MAT','pt_ch-four-pattern-container');  
genPtCol('pt_fe', 'PATTERN4MAT','STITCHPATTERN4MAT','PATTERNDOTS4MAT','pt_fe-four-pattern-container');  
genPtCol('pt_al', 'PATTERN4MAT','STITCHPATTERN4MAT','PATTERNDOTS4MAT','pt_al-four-pattern-container');   
genPtCol('pt_pg', 'PATTERN4MAT','STITCHPATTERN4MAT','PATTERNDOTS4MAT','pt_pg-four-pattern-container');   
genPtCol('pt_pn', 'PATTERN4MAT','STITCHPATTERN4MAT','PATTERNDOTS4MAT','pt_pn-four-pattern-container');  

genPtCol('pt_ch', 'PATTERN5MAT','STITCHPATTERN5MAT','PATTERNDOTS5MAT','pt_ch-five-pattern-container');  
genPtCol('pt_fe', 'PATTERN5MAT','STITCHPATTERN5MAT','PATTERNDOTS5MAT','pt_fe-five-pattern-container');  
genPtCol('pt_al', 'PATTERN5MAT','STITCHPATTERN5MAT','PATTERNDOTS5MAT','pt_al-five-pattern-container');   
genPtCol('pt_pg', 'PATTERN5MAT','STITCHPATTERN5MAT','PATTERNDOTS5MAT','pt_pg-five-pattern-container');   
genPtCol('pt_pn', 'PATTERN5MAT','STITCHPATTERN5MAT','PATTERNDOTS5MAT','pt_pn-five-pattern-container');   

genPtCol('pt_ch', 'PATTERN6MAT','STITCHPATTERN6MAT','PATTERNDOTS6MAT','pt_ch-six-pattern-container');  
genPtCol('pt_fe', 'PATTERN6MAT','STITCHPATTERN6MAT','PATTERNDOTS6MAT','pt_fe-six-pattern-container');  
genPtCol('pt_al', 'PATTERN6MAT','STITCHPATTERN6MAT','PATTERNDOTS6MAT','pt_al-six-pattern-container');   
genPtCol('pt_pg', 'PATTERN6MAT','STITCHPATTERN6MAT','PATTERNDOTS6MAT','pt_pg-six-pattern-container');   
genPtCol('pt_pn', 'PATTERN6MAT','STITCHPATTERN6MAT','PATTERNDOTS6MAT','pt_pn-six-pattern-container');   