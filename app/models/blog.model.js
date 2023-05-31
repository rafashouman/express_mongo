module.exports = (mongoose, mongoosePaginate) => {
  var schema = mongoose.Schema(
    {
      title: { type: String, required: true },
      description: { type: String, required: true },
      images: { type: [String], required: false },
      published: { type: Boolean, required: true, default: false },
      createdAt: { type: Date, default: Date.now }
    },
    { timestamps: true }
  );

  schema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  schema.plugin(mongoosePaginate);

  const Blog = mongoose.model("blog", schema);
  return Blog;
};
