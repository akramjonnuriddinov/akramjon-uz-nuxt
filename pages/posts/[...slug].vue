<template>
  <main class="custom-code">
    <AppContainer>
      <ContentDoc />
    </AppContainer>
  </main>
</template>

<script setup></script>

<style>
* {
  scroll-behavior: smooth;
}
/* Header and Title */
.custom-code h1,
.custom-code h2,
.custom-code h3,
.custom-code h4,
.custom-code h5,
.custom-code h6 {
  @apply font-bold;
  margin-bottom: 0.75rem;
}

h1 {
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
}

.custom-code h2 {
  font-size: 1.5rem;
  margin-top: 2rem;
}

.custom-code h3 {
  font-size: 1.5rem;
  margin-top: 1.5rem;
}

/* Lists */
.custom-code ul {
  margin: 1rem 0;
  padding-left: 1.5rem;
}

.custom-code ul li {
  margin-bottom: 0.5rem;
}

/* Code Styling */
.custom-code code {
  /* background-color: #f4f4f4; */
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-family: "Fira Code", monospace;
  color: #d23669;
  font-size: 0.95rem;
}

.custom-code pre {
  background-color: #18181b;
  color: #f8f8f2;
  padding: 1rem 1.5rem;
  border-radius: 8px;
  overflow-x: auto;
  font-family: "Fira Code", monospace;
  font-size: 0.95rem;
  margin: 1rem 0;
  line-height: 1.5;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
}

/* Highlighting for Code Elements */
.custom-code pre code {
  /* color: #f8f8f2; */
}

.custom-code pre code .keyword {
  color: #66d9ef;
}

.custom-code pre code .string {
  color: #a6e22e;
}

.custom-code pre code .number {
  color: #ae81ff;
}

.custom-code pre code .comment {
  color: #75715e;
  font-style: italic;
}

.custom-code pre code .function {
  color: #fd971f;
}

/* Images */
.custom-code img {
  max-width: 100%;
  border-radius: 8px;
  margin: 1rem 0;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

/* Blockquote */
.custom-code blockquote {
  margin: 1.5rem 0;
  padding: 1rem;
  background: #f4f4f4;
  border-left: 4px solid #3498db;
  font-style: italic;
  color: #555;
}

/* Summary GIFs */
.custom-code .summary-img {
  display: block;
  margin: 1rem auto;
  max-width: 400px;
  border-radius: 8px;
}

/* Responsive Design */
@media (max-width: 768px) {
  .custom-code h1 {
    font-size: 2rem;
  }

  .custom-code h2 {
    font-size: 1.75rem;
  }

  .custom-code h3 {
    font-size: 1.5rem;
  }

  .custom-code .container {
    padding: 1rem;
  }
}
</style>
