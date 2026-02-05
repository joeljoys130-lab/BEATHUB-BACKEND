# Data Modeling Decisions

## Why did you reference Songs in the Playlist instead of embedding them?
Songs are referenced instead of embedded to avoid data duplication. A song can belong to multiple playlists, and embedding would cause inconsistency if song data changes. Referencing keeps data normalized and scalable.

## Why did you reference the Artist in the Song model?
Referencing the artist allows efficient querying of all songs by a specific artist and avoids repeating artist details in every song document. This maintains a clean relational structure similar to SQL foreign keys.
