for i in 1..20
    Book.create(
        title: Faker::Book.title,
        author: Faker::Book.author,
        genre: Faker::Book.genre
    )

    puts "Created #{i} books"
end