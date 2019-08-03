export const footerComponent = (data: { title: string }) => `
  <footer class="footer">
    <div class="content__inner">
      <p><a href="#top" title="Back to top">Back to top &raquo;</a></p>
      <p>&copy;<span id="date">YYYY</span> ${data.title}</p>
    </div>
  </footer>
`;
