export type ClaimedItem = {
  id: number;
  artist_display: string;
  title: string;
  description: string | null;
  thumbnail: {
    lqip: string;
    width: number;
    height: number;
    alt_text: string;
  };
  imageUrl: string;
  itemId: number;
  userId: number;
}[];

export const ClaimedItems: ClaimedItem = [
  {
    id: 1,
    artist_display: 'Egyptian',
    title: 'Amulet of a Leg and Foot',
    description:
      "<p>Small-scale Egyptian figurines, known as amulets, were thought to promote health and good luck. Amulets were such an important part of Egyptian religious beliefs that they were worn by both the living and the dead. They could be mounted on rings or strung as bracelets or necklaces and were placed among the mummy wrappings to secure the deceased's rebirth and well-being in the afterlife. There are many varieties of amulets, including figures of deities, parts of the human (or divine) body, animals, plants, and objects of daily life. The leg and foot were thought to provide the deceased mobility in the afterlife. A few examples of these types of amulets have been found on the ankles of mummies.</p>",
    thumbnail: {
      lqip: 'data:image/gif;base64,R0lGODlhBAAFAPQAAJB6d5Z8daV8Z62RgL2so76yqcbDwMvMys3Mys3My87Ny87NzNDPzdDQztLTz9LU09HV1dPV1dPX19XX1QAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAAAAAAALAAAAAAEAAUAAAURIJMszTMUUSQQ0QQETXIYSQgAOw==',
      width: 814,
      height: 1085,
      alt_text: 'A work made of carnelian.',
    },
    imageUrl:
      'https://www.artic.edu/iiif/2/0a0e16c5-8510-bb2d-b2ca-424feae48d5c/full/843,/0/default.jpg',
    itemId: 6010,
    userId: 4,
  },
  {
    id: 2,
    artist_display: 'Egyptian',
    title: 'Ram Amulet',
    description:
      '<p>Small-scale Egyptian figurines, known as amulets, were thought to promote health and good luck. Amulets were such an important part of Egyptian religious beliefs that they were worn by both the living and the dead. They could be mounted on rings or strung as bracelets or necklaces and were placed among the mummy wrappings to secure the deceased’s rebirth and well-being in the afterlife. Many varieties of amulets survive, including figures of deities, parts of the human (ordivine) body, animals, plants, and objects of daily life. The ram symbolized of virility and power. The amulet was also a pun: the words “ram” and “soul” were the same in ancient Egyptian, and so by extension, the amulet gave power to the soul of the deceased.</p>',
    thumbnail: {
      lqip: 'data:image/gif;base64,R0lGODlhBwAFAPQAAJuRfKmaeYqMjY+VnaOhmpmfpbm0qaCns7m6u7y9vL3BxsLDxMXGx8/KwMrJxsrJx8zLyc3NzM3Nzc/Pz9DQz9DQ0NDR0NDQ0dDR0dHR0dLR0dHR0tDR09TT0dbU0tLT1CH5BAAAAAAALAAAAAAHAAUAAAUZoGV13idakXIEjegUA/CIkEEIjBgtSBJNIQA7',
      width: 1307,
      height: 980,
      alt_text: 'A work made of glass.',
    },
    imageUrl:
      'https://www.artic.edu/iiif/2/58ab2466-9c2d-8c45-b82d-564f7e5bbb86/full/843,/0/default.jpg',
    itemId: 64165,
    userId: 4,
  },
  {
    id: 3,
    artist_display: 'Nathan Hylden American, born 1978',
    title: 'Untitled',
    description: null,
    thumbnail: {
      lqip: 'data:image/gif;base64,R0lGODlhBAAFAPQAAGhpbmxucG1tdHFwdXR0ent9gH19gXx+gX5/hIGDhoKEiImLkIqNkZqanKKnpKqvrquwr7e8tLu9ucDDvgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAAAAAAALAAAAAAEAAUAAAURYOQEwPQUhAQdQsMoRrIgQwgAOw==',
      width: 5003,
      height: 6804,
      alt_text: 'A work made of acrylic on aluminum.',
    },
    imageUrl:
      'https://www.artic.edu/iiif/2/9f73f9f6-5943-a76c-93de-48cd32572d09/full/843,/0/default.jpg',
    itemId: 242021,
    userId: 3,
  },
  {
    id: 4,
    artist_display: 'Raimer Jochims German, born 1935',
    title: 'Jericho III',
    description:
      "<p>For over 50 years, Raimer Jochims has remained committed to painting contemplative, process-based abstractions. His mature work evolved out of his participation in monochromatic and optical painting movements in the 1960s and '70s. Started in 1973, his uniquely shaped paintings originate from studied observations of wide-ranging source materials such as Buddha statues, Polynesian ancestor figures, Aztec pottery, Egyptian sculptures, and Chinese paintings. He uses small traces of these objects to create autonomous works lacking any obvious references to their origins. Ignoring historical and geographical differences, Jochims's approach assimilates the resulting forms into innovative abstract statements.</p><p>Jochims manipulates his painting supports as much as he does their surfaces. He contemplates each shape and selectively activates its edges by chipping the wood with tongs. Jochims then patiently chooses color gradations that seem to respond to the particular demands of the form: some shift quickly and dramatically, while others dissolve slowly and subtly. He later adds an open-ended title that does not necessarily relate directly to his source material but may trigger other associations such as cities, ancient cultures, influential artists, and mythical beings. Finally, he selects the placement and hanging height of each individual work according to color, dimension, and orientation. Using a distinctive methodology, Jochims creates new, autonomous pictorial forms with their own intricacies and self-reflexive logic.<p>",
    thumbnail: {
      lqip: 'data:image/gif;base64,R0lGODlhCAAFAPUAAAAYVRMkWQAGdhkseyEzag1TexNnjSl8nFpliRSKnR2qs3iDmHmZtlalr3exwJ+gqre8zIjS0r/BycHDzMbJ2NPS0trZ29nc493d4dvf6ODc5+Dh6ODi6eHj6ePh6uLk6ubm6uHl7OTn7erl7erp7+zr8ezv9O7w9gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAAAAAAALAAAAAAIAAUAAAYlwMxntDGdRBePI9JYPCQdzUGRAAgIlhLDUAgMEJgQiQKZVECcIAA7',
      width: 4956,
      height: 3304,
      alt_text: 'A work made of acrylic on chipboard.',
    },
    imageUrl:
      'https://www.artic.edu/iiif/2/3572974a-2d8c-dd4c-5d5c-04fbdc71784b/full/843,/0/default.jpg',
    itemId: 228846,
    userId: 3,
  },
  {
    id: 5,
    artist_display: 'Max Ernst French, born Germany, 1891-1976',
    title: 'Human Figure with Two Birds',
    description:
      "<p>Like <a href='https://www.artic.edu/artists/33735'>Constantin Brâncusi</a>, Max Ernst was fascinated with birds, and among his earliest works incorporating this motif are some two dozen small, unconventional pictures made around 1925. One of these works was incorporated as a picture within a picture in <em>Human Figure with Two Birds</em>, a painting that set the stage for an extraordinary series of works that Ernst began in 1930, which featured a large, fantastic bird figure that the artist identified as Loplop. In these works, Loplop, the artist's &quot;private phantom attached to my person,&quot; generally holds up a picture for presentation. Here the rudimentary figure outlined in white is an early manifestation of Loplop, Ernst's playful, surreal concept of self-portraiture by proxy.</p>",
    thumbnail: {
      lqip: 'data:image/gif;base64,R0lGODlhAgAFAPMAACchJyQgKCcjKisoLSsoLi0oLTk1Nzo1N1NOS1ROSwAAAAAAAAAAAAAAAAAAAAAAACH5BAAAAAAALAAAAAACAAUAAAQIkAwRzEGpgAgAOw==',
      width: 782,
      height: 2250,
      alt_text:
        'A work made of oil on emery paper, mounted on scrap-wood panel covered with industrial-grade black paper.',
    },
    imageUrl:
      'https://www.artic.edu/iiif/2/d0979087-dc1b-f259-a23f-169cdced27ee/full/843,/0/default.jpg',
    itemId: 3752,
    userId: 2,
  },
];
