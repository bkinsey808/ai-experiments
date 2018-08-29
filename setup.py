import setuptools

with open("README.md", "r") as fh:
    long_description = fh.read()

setuptools.setup(
    name="ai_experiments",
    version="1.0.1",
    author="Ben Kinsey",
    author_email="bkinsey@gmail.com",
    description="just some random ai_experiments in both python and typescript",
    long_description=long_description,
    long_description_content_type="text/markdown",
    url="https://github.com/bkinsey/ai-experiments",
    packages=setuptools.find_packages(),
    classifiers=(
        "Programming Language :: Python :: 3",
        "License :: OSI Approved :: MIT License",
        "Operating System :: OS Independent",
    ),
)
