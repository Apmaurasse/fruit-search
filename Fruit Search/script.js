const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

const searchBox = document.getElementById('fruit');
    const suggestions = document.getElementById('suggestions');

	searchBox.addEventListener('input', function() {
		const searchTerm = searchBox.value.toLowerCase().trim();
		if (searchTerm === '') {
		  suggestions.innerHTML = '';
		  suggestions.style.display = 'none';
		  return;
		}
	  
		const matchedResults = fruit.filter(function(result) {
		  return result.toLowerCase().includes(searchTerm);
		});
	  
		suggestions.innerHTML = '';
	  
		matchedResults.forEach(function(result) {
		  const anchor = document.createElement('a');
		  anchor.innerHTML = highlightSearchTerm(result, searchTerm);
		  suggestions.appendChild(anchor);
	  
		  anchor.addEventListener('mouseover', function() {
			anchor.classList.add('highlight');
		  });
	  
		  anchor.addEventListener('mouseout', function() {
			anchor.classList.remove('highlight');
		  });
	  
		  anchor.addEventListener('click', function() {
			useSuggestion(result);
		  });
		});
	  
		if (matchedResults.length > 0) {
		  suggestions.style.display = 'block';
		} else {
		  suggestions.style.display = 'none';
		}
	  });
	  
	  function highlightSearchTerm(result, searchTerm) {
		const regex = new RegExp(searchTerm, 'gi');
		return result.replace(regex, function(match) {
		  return '<strong>' + match + '</strong>';
		});
	  }
	  
	  function useSuggestion(suggestion) {
		searchBox.value = suggestion;
		suggestions.innerHTML = '';
		suggestions.style.display = 'none';
	  }