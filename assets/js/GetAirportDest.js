var optionsDest = {
    shouldSort: true,
    threshold: 0.4,
    maxPatternLength: 32,
    keys: [{
        name: 'iata',
        weight: 0.5
    }, {
        name: 'name',
        weight: 0.3
    }, {
        name: 'city',
        weight: 0.2
    }]
};

var fuseDest = new Fuse(airports, optionsDest)


var acDest = $('#autocompletedestination')
    .on('click', function (e) {
        e.stopPropagation();
    })
    .on('focus keyup', searchDest)
    .on('keydown', onKeyDownDest);

var wrapDest = $('<div>')
    .addClass('autocomplete-wrapper')
    .insertBefore(acDest)
    .append(acDest);

var listDest = $('<div>')
    .addClass('autocomplete-results')
    .on('click', '.autocomplete-result', function (e) {
        e.preventDefault();
        e.stopPropagation();
        selectIndexDest($(this).data('index'));
    })
    .appendTo(wrapDest);

$(document)
    .on('mouseover', '.autocomplete-result', function (e) {
        var index = parseInt($(this).data('index'), 10);
        if (!isNaN(index)) {
            listDest.attr('data-highlight', index);
        }
    })
    .on('click', clearResultsDest);

function clearResultsDest() {
    results = [];
    numResults = 0;
    listDest.empty();
}

function selectIndexDest(index) {
    if (results.length >= index + 1) {
        acDest.val(results[index].country+", "+results[index].name+", "+results[index].city);
        clearResultsDest();
    }
}

var results = [];
var numResults = 0;
var selectedIndex = -1;

function searchDest(e) {
    if (e.which === 38 || e.which === 13 || e.which === 40) {
        return;
    }

    if (acDest.val().length > 0) {
        results = _.take(fuseDest.search(acDest.val()), 7);
        numResults = results.length;

        var divs = results.map(function (r, i) {
            return '<div class="autocomplete-result" data-index="' + i + '">'
                + '<div><b>' + r.iata + '</b> - ' + r.name + '</div>'
                + '<div class="autocomplete-location">' + r.city + ', ' + r.country + '</div>'
                + '</div>';
        });

        selectedIndex = -1;
        listDest.html(divs.join(''))
            .attr('data-highlight', selectedIndex);

    } else {
        numResults = 0;
        listDest.empty();
    }
}

function onKeyDownDest(e) {
    switch (e.which) {
        case 38: // up
            selectedIndex--;
            if (selectedIndex <= -1) {
                selectedIndex = -1;
            }
            listDest.attr('data-highlight', selectedIndex);
            break;
        case 13: // enter
            selectIndexDest(selectedIndex);
            break;
        case 9: // enter
            selectIndexDest(selectedIndex);
            e.stopPropagation();
            return;
        case 40: // down
            selectedIndex++;
            if (selectedIndex >= numResults) {
                selectedIndex = numResults - 1;
            }
            listDest.attr('data-highlight', selectedIndex);
            break;

        default: return; // exit this handler for other keys
    }
    e.stopPropagation();
    e.preventDefault(); // prevent the default acDesttion (scroll / move caret)
}