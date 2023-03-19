export default function BrandCard({ imageSource }: { imageSource: string }) {
  return (
    <div className="col-5">
      <img src={imageSource} />
    </div>
  );
}
