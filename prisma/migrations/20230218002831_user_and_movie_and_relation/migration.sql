-- CreateTable
CREATE TABLE "movies" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "duration" INTEGER NOT NULL,
    "releaseDate" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "movie_rent" (
    "movieId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    PRIMARY KEY ("movieId", "userId"),
    CONSTRAINT "movie_rent_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "movie_rent_movieId_fkey" FOREIGN KEY ("movieId") REFERENCES "movies" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "movies_title_key" ON "movies"("title");
