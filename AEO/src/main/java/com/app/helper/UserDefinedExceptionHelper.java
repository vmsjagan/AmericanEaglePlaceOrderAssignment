package com.app.helper;

public class UserDefinedExceptionHelper {
	@SuppressWarnings("serial")
	public class FormException extends Exception {
		public FormException(String exception) {
			super('"' + exception + '"');
		}
	}

	@SuppressWarnings("serial")
	public class ElementNotFoundException extends Exception {
		public ElementNotFoundException(String exception) {
			super('"' + exception + '"');
		}
	}

	@SuppressWarnings("serial")
	public class ClickException extends Exception {
		public ClickException(String exception) {
			super('"' + exception + '"');
		}
	}

	@SuppressWarnings("serial")
	public class BrowserException extends Exception {
		public BrowserException(String exception) {
			super('"' + exception + '"');
		}
	}

	@SuppressWarnings("serial")
	public class ObjectNotFoundException extends Exception {
		public ObjectNotFoundException(String exception) {
			super('"' + exception + '"');
		}
	}
}
