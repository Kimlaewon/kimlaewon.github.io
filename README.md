# Kim Laewon Portfolio Rebuild

## 구성
- `index.html`: 포트폴리오 구조, 영상/코딩 프로젝트 링크
- `style.css`: 전체 디자인, 반응형, 카드 레이아웃, 가독성 보정
- `main.js`: 스크롤 리빌, 네비게이션 활성화
- `thumb-*.svg`: 임시 프로젝트 썸네일 이미지

## 이번 수정 내용
1. 전체 텍스트 대비, 행간, 카드 간격, 버튼/라벨 구조를 조정해 가독성을 올렸습니다.
2. Video 섹션에 아래 링크를 넣었습니다.
   - Motion Graphics: `https://youtu.be/XdrxGp-CKPQ?si=IkCYhyl8yhgPVv7v`
   - MV: `https://youtu.be/pi3zjZvhsNE?si=U-hvvMMwXNhvKGTr`
3. YouTube 썸네일을 자동으로 보이게 했고, 네트워크 문제로 로드가 안 될 때는 로컬 SVG 썸네일이 보이도록 fallback을 넣었습니다.
4. Coding 섹션에 `Portfolio Coding` 카드를 하나 추가했습니다.

## 포폴 코딩 링크 바꾸는 법
`index.html`에서 아래 부분을 찾은 뒤 `href`만 실제 주소로 바꾸면 됩니다.

```html
<a href="https://example.com/portfolio-coding" target="_blank" rel="noreferrer" aria-label="Portfolio Coding 프로젝트 보기">
```

예시:

```html
<a href="https://github.com/Kimlaewon/portfolio" target="_blank" rel="noreferrer" aria-label="Portfolio Coding 프로젝트 보기">
```

## 적용 방법
1. 기존 GitHub Pages 저장소에서 `.git` 폴더는 건드리지 않습니다.
2. 이 폴더 안의 파일들을 저장소 루트에 덮어씌웁니다.
3. 아직 비어 있는 `href="#"` 링크는 실제 작업물 링크가 생기면 교체합니다.
