import React from "react";
import YoutubeItems from "./YouTubeItems";
import { YoutubeData } from "../YoutubeData";
class YoutubeList extends React.Component {
  // Rendering list

  render() {
    return (
      <div className="youtube-list">
        {YoutubeData.map((item, index) => (
          <YoutubeItems
            key={item.id}
            image={item.image}
            avatar={item.avatar}
            title={item.title}
            author={item.author}
          />
        ))}
        {/* <YoutubeItems
          image="https://media.istockphoto.com/id/1393287022/vi/anh/ph%E1%BB%A5-n%E1%BB%AF-s%E1%BB%AD-d%E1%BB%A5ng-vr-v%C3%A0-b%E1%BB%99-%C4%91i%E1%BB%81u-khi%E1%BB%83n-trong-th%E1%BA%BF-gi%E1%BB%9Bi-c%E1%BB%A7a-metaverse-ch%C3%A2n-dung-3d-render-minh-h%E1%BB%8Da.webp?b=1&s=170667a&w=0&k=20&c=BRCL_8xDkXndg7sNsnhl7U9iuhrXK8W0U-dGGYSLX88="
          avatar="https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
          title="React cơ bản"
          author="Evondev"
        />
        <YoutubeItems
          image="https://media.istockphoto.com/id/1416029563/vi/anh/c%C3%B4ng-ngh%E1%BB%87-th%E1%BA%BF-gi%E1%BB%9Bi-m%E1%BA%A1ng-k%E1%BB%B9-thu%E1%BA%ADt-s%E1%BB%91-metaverse-ng%C6%B0%E1%BB%9Di-%C4%91%C3%A0n-%C3%B4ng-v%E1%BB%9Bi-th%E1%BB%B1c-t%E1%BA%BF-%E1%BA%A3o-vr-goggle-ch%C6%A1i-tr%C3%B2.webp?b=1&s=170667a&w=0&k=20&c=ybCJ4AnnWrIIl5ZKhN6kVvJmI_sWzq9OthIFDV1ebSs="
          avatar="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
          title="Restream hôm qua"
          author="Mixigaming"
        />
        <YoutubeItems
          image="https://media.istockphoto.com/id/1393287022/vi/anh/ph%E1%BB%A5-n%E1%BB%AF-s%E1%BB%AD-d%E1%BB%A5ng-vr-v%C3%A0-b%E1%BB%99-%C4%91i%E1%BB%81u-khi%E1%BB%83n-trong-th%E1%BA%BF-gi%E1%BB%9Bi-c%E1%BB%A7a-metaverse-ch%C3%A2n-dung-3d-render-minh-h%E1%BB%8Da.webp?b=1&s=170667a&w=0&k=20&c=BRCL_8xDkXndg7sNsnhl7U9iuhrXK8W0U-dGGYSLX88="
          avatar="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
        />
        <YoutubeItems
          image="https://media.istockphoto.com/id/1393287022/vi/anh/ph%E1%BB%A5-n%E1%BB%AF-s%E1%BB%AD-d%E1%BB%A5ng-vr-v%C3%A0-b%E1%BB%99-%C4%91i%E1%BB%81u-khi%E1%BB%83n-trong-th%E1%BA%BF-gi%E1%BB%9Bi-c%E1%BB%A7a-metaverse-ch%C3%A2n-dung-3d-render-minh-h%E1%BB%8Da.webp?b=1&s=170667a&w=0&k=20&c=BRCL_8xDkXndg7sNsnhl7U9iuhrXK8W0U-dGGYSLX88="
          avatar="https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
          title="Rap Việt mùa 3"
          author="VieOn Channel"
        /> */}
      </div>
    );
  }
}

export default YoutubeList;
