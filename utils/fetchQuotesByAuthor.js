export function filterQuotesByAuthor(data, author) {
    const filteredQuotes = [];

    for (const category in data) {
        if (data.hasOwnProperty(category)) {
            const quotesInCategory = data[category];
            const authorQuotes = quotesInCategory.filter(quote => quote.author === author);
            
            filteredQuotes.push(...authorQuotes);
        }
    }

    return filteredQuotes;
}