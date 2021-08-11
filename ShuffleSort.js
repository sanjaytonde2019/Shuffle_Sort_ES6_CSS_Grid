
const shuffleAndSortFunction = (function(){
        const shuffleSortConfig = [
            { displayText:1, class: ['cst-color1','elePosition'] }, 
            { displayText:2, class: ['cst-color2','elePosition'] }, 
            { displayText:3, class: ['cst-color3','elePosition'] }, 
            { displayText:4, class: ['cst-color2','elePosition'] }, 
            { displayText:5, class: ['cst-color3','elePosition'] },
            { displayText:6, class: ['cst-color4','elePosition'] }, 
            { displayText:7, class: ['cst-color4','elePosition'] },
            { displayText:8, class: ['cst-color1','elePosition'] }, 
            { displayText:9, class: ['cst-color3','elePosition'] }
        ];

        const shuffleElements = () =>{            
            shuffleSortConfig.sort(() => Math.random() - 0.5);
           	renderData();
        }

        const sortElements = () =>{
            shuffleSortConfig.sort(function (x, y) {
                return x.displayText - y.displayText;
            });
            renderData();
        }

        const renderData = () => {
            document.getElementById('elements-container').innerHTML = '';
            shuffleSortConfig.forEach(value => {
                let divEleHTMLObj = elementGenerator(value);
                document.getElementById("elements-container").appendChild(divEleHTMLObj);
            });             
        }
        
        const elementGenerator =(elemInfo)=>{
            const div = document.createElement("div");
            div.classList.add(...elemInfo.class);
            div.appendChild(document.createTextNode(elemInfo.displayText));
            return div;
        }

        return {
            runShuffle: shuffleElements, 
            runSort: sortElements
        }
})();
(function initialize(){
	shuffleAndSortFunction.runSort();
})();
 
